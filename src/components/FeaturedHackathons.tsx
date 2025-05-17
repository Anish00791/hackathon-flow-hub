
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HackathonCard from './HackathonCard';
import { mockHackathons } from '@/data/mockHackathons';

const FeaturedHackathons = () => {
  // Filter to get featured and upcoming hackathons
  const featuredHackathons = mockHackathons.filter(hackathon => hackathon.featured);
  const upcomingHackathons = mockHackathons.filter(hackathon => 
    new Date(hackathon.startDate) > new Date() && 
    hackathon.registrationOpen && 
    !hackathon.featured
  ).slice(0, 3 - featuredHackathons.length);
  
  const displayHackathons = [...featuredHackathons, ...upcomingHackathons].slice(0, 3);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Featured Hackathons</h2>
            <p className="text-muted-foreground max-w-2xl">
              Discover exciting opportunities to showcase your skills, collaborate with others, and build innovative solutions.
            </p>
          </div>
          <Link to="/hackathons" className="mt-4 md:mt-0">
            <Button variant="outline" className="flex items-center">
              View All <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayHackathons.map(hackathon => (
            <HackathonCard key={hackathon.id} {...hackathon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedHackathons;
