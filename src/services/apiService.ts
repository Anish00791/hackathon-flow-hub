import { API_BASE_URL, API_TIMEOUT } from "@/config/apiConfig";

// Basic headers for JSON communication
const defaultHeaders = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
};

// Add auth token to requests if available
const getAuthHeaders = () => {
  const token = localStorage.getItem('authToken');
  return token ? { 'Authorization': `Bearer ${token}` } : {};
};

// Timeout handler
const timeoutPromise = (ms: number) => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error('Request timed out'));
    }, ms);
  });
};

// Error handler
const handleError = (error: any) => {
  if (error.status === 401) {
    // Clear auth token and redirect to login
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    window.location.href = '/login';
  }
  throw error;
};

// Generic fetch handler with error handling
const fetchWithTimeout = async (url: string, options: RequestInit, timeout: number) => {
  try {
    const response = await Promise.race([
      fetch(url, options),
      timeoutPromise(timeout)
    ]) as Response;

    // Check if response has content
    const contentType = response.headers.get('content-type');
    let data;
    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      data = await response.text();
    }
    
    if (!response.ok) {
      throw { 
        status: response.status, 
        data: typeof data === 'string' ? { message: data } : data 
      };
    }
    
    return data;
  } catch (error: any) {
    console.error('API request failed:', error);
    if (error.status === 401) {
      // Clear auth token and redirect to login
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    throw error;
  }
};

// API service methods
export const apiService = {
  get: async <T>(endpoint: string): Promise<T> => {
    const url = `${API_BASE_URL}${endpoint}`;
    const options = {
      method: 'GET',
      headers: { ...defaultHeaders, ...getAuthHeaders() }
    };
    return fetchWithTimeout(url, options, API_TIMEOUT);
  },
  
  post: async <T>(endpoint: string, data: any): Promise<T> => {
    const url = `${API_BASE_URL}${endpoint}`;
    const options = {
      method: 'POST',
      headers: { ...defaultHeaders, ...getAuthHeaders() },
      body: JSON.stringify(data)
    };
    return fetchWithTimeout(url, options, API_TIMEOUT);
  },
  
  put: async <T>(endpoint: string, data: any): Promise<T> => {
    const url = `${API_BASE_URL}${endpoint}`;
    const options = {
      method: 'PUT',
      headers: { ...defaultHeaders, ...getAuthHeaders() },
      body: JSON.stringify(data)
    };
    return fetchWithTimeout(url, options, API_TIMEOUT);
  },
  
  delete: async <T>(endpoint: string): Promise<T> => {
    const url = `${API_BASE_URL}${endpoint}`;
    const options = {
      method: 'DELETE',
      headers: { ...defaultHeaders, ...getAuthHeaders() }
    };
    return fetchWithTimeout(url, options, API_TIMEOUT);
  }
};
