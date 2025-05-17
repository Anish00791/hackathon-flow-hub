
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export interface HackathonCardProps {
  id: string;
  title: string;
  organizer: string;
  startDate: string;
  endDate: string;
  location: string;
  mode: 'online' | 'in-person' | 'hybrid';
  participants: number;
  maxParticipants: number;
  tags: string[];
  featured?: boolean;
  registrationOpen: boolean;
  imageUrl: string;
}

const HackathonCard: React.FC<HackathonCardProps> = ({
  id,
  title,
  organizer,
  startDate,
  endDate,
  location,
  mode,
  participants,
  maxParticipants,
  tags,
  featured,
  registrationOpen,
  imageUrl,
}) => {
  // Format dates for display
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });
  };

  const getModeColor = () => {
    switch (mode) {
      case 'online':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'in-person':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'hybrid':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  return (
    <Card className={`overflow-hidden card-hover ${featured ? 'border-hackathon-purple animate-pulse-glow' : ''}`}>
      <div className="h-48 overflow-hidden relative">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        {featured && (
          <div className="absolute top-3 right-3">
            <Badge variant="default" className="bg-hackathon-purple hover:bg-hackathon-purple">Featured</Badge>
          </div>
        )}
      </div>
      <CardContent className="p-5">
        <div className="flex flex-col space-y-4">
          <div>
            <h3 className="text-xl font-bold truncate">{title}</h3>
            <p className="text-sm text-muted-foreground">Hosted by {organizer}</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1 text-sm">
              <Calendar size={16} className="text-hackathon-purple" />
              <span>{formatDate(start)} - {formatDate(end)}</span>
            </div>
            <span className={`px-2 py-1 rounded-full text-xs ${getModeColor()}`}>
              {mode.charAt(0).toUpperCase() + mode.slice(1)}
            </span>
          </div>

          <div className="flex items-center space-x-1 text-sm">
            <MapPin size={16} className="text-hackathon-purple" />
            <span className="truncate">{location}</span>
          </div>
          
          <div className="flex items-center space-x-1 text-sm">
            <Users size={16} className="text-hackathon-purple" />
            <span>{participants}/{maxParticipants} participants</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
            {tags.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{tags.length - 3}
              </Badge>
            )}
          </div>
          
          <div className="pt-2">
            <Link to={`/hackathons/${id}`} className="w-full block">
              <Button 
                className="w-full" 
                variant={registrationOpen ? "default" : "outline"}
                disabled={!registrationOpen}
              >
                {registrationOpen ? 'Register Now' : (
                  <div className="flex items-center space-x-1">
                    <Clock size={14} />
                    <span>Registration Closed</span>
                  </div>
                )}
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HackathonCard;
