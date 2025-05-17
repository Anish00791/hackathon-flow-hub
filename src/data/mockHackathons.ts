
import { HackathonCardProps } from '../components/HackathonCard';

export const mockHackathons: HackathonCardProps[] = [
  {
    id: '1',
    title: 'AI Innovation Hackathon',
    organizer: 'TechCorp',
    startDate: '2025-06-10',
    endDate: '2025-06-12',
    location: 'San Francisco, CA',
    mode: 'hybrid',
    participants: 120,
    maxParticipants: 200,
    tags: ['AI', 'Machine Learning', 'Data Science', 'Innovation'],
    featured: true,
    registrationOpen: true,
    imageUrl: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80'
  },
  {
    id: '2',
    title: 'Blockchain Revolution',
    organizer: 'CryptoStart Foundation',
    startDate: '2025-07-15',
    endDate: '2025-07-17',
    location: 'Online',
    mode: 'online',
    participants: 85,
    maxParticipants: 150,
    tags: ['Blockchain', 'Web3', 'Cryptocurrency', 'Smart Contracts'],
    registrationOpen: true,
    imageUrl: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&q=80'
  },
  {
    id: '3',
    title: 'Green Tech Solutions',
    organizer: 'EcoCode Initiative',
    startDate: '2025-06-25',
    endDate: '2025-06-27',
    location: 'Boston, MA',
    mode: 'in-person',
    participants: 50,
    maxParticipants: 100,
    tags: ['Sustainability', 'CleanTech', 'Environment', 'IoT'],
    registrationOpen: true,
    imageUrl: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80'
  },
  {
    id: '4',
    title: 'Healthcare Hackathon',
    organizer: 'MedTech Alliance',
    startDate: '2025-08-05',
    endDate: '2025-08-07',
    location: 'Chicago, IL',
    mode: 'in-person',
    participants: 100,
    maxParticipants: 100,
    tags: ['Healthcare', 'MedTech', 'Telemedicine', 'Data Analytics'],
    registrationOpen: false,
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80'
  },
  {
    id: '5',
    title: 'Fintech Innovation Challenge',
    organizer: 'Global Banking Institute',
    startDate: '2025-09-12',
    endDate: '2025-09-14',
    location: 'New York, NY',
    mode: 'hybrid',
    participants: 75,
    maxParticipants: 150,
    tags: ['FinTech', 'Banking', 'Payments', 'InsurTech'],
    featured: true,
    registrationOpen: true,
    imageUrl: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80'
  },
  {
    id: '6',
    title: 'Space Tech Explorer',
    organizer: 'Cosmos Research Labs',
    startDate: '2025-10-01',
    endDate: '2025-10-03',
    location: 'Online',
    mode: 'online',
    participants: 60,
    maxParticipants: 120,
    tags: ['Space', 'Aerospace', 'Satellite', 'Data Visualization'],
    registrationOpen: true,
    imageUrl: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80'
  }
];
