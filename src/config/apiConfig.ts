// API base URL - change this to your Java backend URL when deployed
export const API_BASE_URL = 'http://localhost:8080/api';
export const API_TIMEOUT = 30000; // 30 seconds

export const API_ENDPOINTS = {
    AUTH: {
        LOGIN: '/auth/login',
        REGISTER: '/auth/register',
        REFRESH: '/auth/refresh',
    },
    HACKATHONS: {
        BASE: '/hackathons',
        FEATURED: '/hackathons/public/featured',
        PUBLIC: '/hackathons/public',
        REGISTER: (id: string) => `/hackathons/${id}/register`,
    },
    USERS: {
        PROFILE: '/users/profile',
        HACKATHONS: '/users/hackathons',
    },
    DASHBOARD: {
        BASE: '/dashboard',
    }
};
