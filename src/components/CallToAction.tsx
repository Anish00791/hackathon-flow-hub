
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-20 bg-hackathon-purple">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to join the next big hackathon?
        </h2>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
          Whether you're looking to showcase your skills, learn something new, or network with other innovators, there's a hackathon for you.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/signup">
            <Button size="lg" variant="default" className="bg-white text-hackathon-purple hover:bg-gray-100">
              Sign Up Now
            </Button>
          </Link>
          <Link to="/hackathons">
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-hackathon-purple/80">
              Browse Hackathons
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
