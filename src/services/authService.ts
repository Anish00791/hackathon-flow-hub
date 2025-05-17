
import { apiService } from './apiService';

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'USER' | 'ORGANIZER' | 'ADMIN';
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export const authService = {
  // Login with email and password
  login: async (credentials: LoginRequest): Promise<AuthResponse> => {
    const response = await apiService.post<AuthResponse>('/auth/login', credentials);
    
    // Store the authentication token
    if (response.token) {
      localStorage.setItem('authToken', response.token);
      localStorage.setItem('user', JSON.stringify(response.user));
    }
    
    return response;
  },
  
  // Register new user
  register: async (userData: RegisterRequest): Promise<AuthResponse> => {
    const response = await apiService.post<AuthResponse>('/auth/register', userData);
    
    // Store the authentication token
    if (response.token) {
      localStorage.setItem('authToken', response.token);
      localStorage.setItem('user', JSON.stringify(response.user));
    }
    
    return response;
  },
  
  // Logout user
  logout: async (): Promise<void> => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    
    // Optionally call logout endpoint if your backend needs to invalidate the token
    try {
      await apiService.post<void>('/auth/logout', {});
    } catch (error) {
      // Even if the backend logout fails, we still clear local storage
      console.log('Backend logout failed, but local session was cleared');
    }
  },
  
  // Get current authenticated user
  getCurrentUser: (): User | null => {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  },
  
  // Check if user is authenticated
  isAuthenticated: (): boolean => {
    return !!localStorage.getItem('authToken');
  }
};
