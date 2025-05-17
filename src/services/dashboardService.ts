import { apiService } from './apiService';
import { User } from './authService';

export interface Hackathon {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  status: string;
  location: string;
  imageUrl?: string;
}

export interface DashboardData {
  user: User;
  hackathons: Hackathon[];
}

export const dashboardService = {
  // Get dashboard data
  getDashboardData: async (): Promise<DashboardData> => {
    return apiService.get<DashboardData>('/dashboard');
  }
}; 