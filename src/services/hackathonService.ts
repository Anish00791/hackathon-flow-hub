import { apiService } from './apiService';
import { API_ENDPOINTS } from '@/config/apiConfig';

// Type definitions for our API responses
export interface Hackathon {
  id: string;
  title: string;
  organizer: {
    id: string;
    name: string;
    email: string;
  };
  startDate: string;
  endDate: string;
  location: string;
  mode: 'ONLINE' | 'IN_PERSON' | 'HYBRID';
  participants: number;
  maxParticipants: number;
  tags: string[];
  featured: boolean;
  registrationOpen: boolean;
  imageUrl: string;
  description: string;
}

export interface HackathonCreateRequest {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  mode: 'ONLINE' | 'IN_PERSON' | 'HYBRID';
  maxParticipants: number;
  tags: string[];
  imageUrl?: string;
}

// This service communicates with the Java backend
export const hackathonService = {
  // Get all hackathons
  getHackathons: async (): Promise<Hackathon[]> => {
    return apiService.get<Hackathon[]>(API_ENDPOINTS.HACKATHONS.PUBLIC);
  },
  
  // Get featured hackathons
  getFeaturedHackathons: async (): Promise<Hackathon[]> => {
    return apiService.get<Hackathon[]>(API_ENDPOINTS.HACKATHONS.FEATURED);
  },
  
  // Get a single hackathon by ID
  getHackathonById: async (id: string): Promise<Hackathon> => {
    return apiService.get<Hackathon>(`${API_ENDPOINTS.HACKATHONS.PUBLIC}/${id}`);
  },
  
  // Create a new hackathon (requires authentication)
  createHackathon: async (hackathon: HackathonCreateRequest): Promise<Hackathon> => {
    return apiService.post<Hackathon>(API_ENDPOINTS.HACKATHONS.BASE, hackathon);
  },
  
  // Update a hackathon (requires authentication)
  updateHackathon: async (id: string, hackathon: Partial<HackathonCreateRequest>): Promise<Hackathon> => {
    return apiService.put<Hackathon>(`${API_ENDPOINTS.HACKATHONS.BASE}/${id}`, hackathon);
  },
  
  // Delete a hackathon (requires authentication)
  deleteHackathon: async (id: string): Promise<void> => {
    return apiService.delete<void>(`${API_ENDPOINTS.HACKATHONS.BASE}/${id}`);
  },
  
  // Register for a hackathon (requires authentication)
  registerForHackathon: async (hackathonId: string): Promise<void> => {
    return apiService.post<void>(API_ENDPOINTS.HACKATHONS.REGISTER(hackathonId), {});
  }
};
