
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Zap, Users } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-radial from-hackathon-dark to-black overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block p-2 bg-hackathon-dark/50 rounded-full mb-6">
            <div className="bg-hackathon-purple/20 px-4 py-1 rounded-full">
              <span className="text-sm font-medium text-hackathon-purple flex items-center justify-center">
                <Zap size={16} className="mr-2" />
                Java Backend Integration Coming Soon
              </span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Innovation Starts Here: <span className="hero-gradient">HackForge</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            The ultimate platform for creating, managing, and participating in hackathons that drive real innovation and collaboration.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/hackathons">
              <Button size="lg" className="font-medium">
                Explore Hackathons
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
            <Link to="/hackathons/create">
              <Button size="lg" variant="outline" className="font-medium text-white border-gray-600 hover:bg-gray-800">
                <Code size={16} className="mr-2" /> Host a Hackathon
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-hackathon-dark/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-hackathon-purple/20 mb-4">
                <Code size={24} className="text-hackathon-purple" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Build Projects</h3>
              <p className="text-gray-400">Create innovative projects in a competitive yet collaborative environment.</p>
            </div>
            
            <div className="bg-hackathon-dark/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-hackathon-purple/20 mb-4">
                <Users size={24} className="text-hackathon-purple" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Form Teams</h3>
              <p className="text-gray-400">Connect with like-minded innovators and form effective teams.</p>
            </div>
            
            <div className="bg-hackathon-dark/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-hackathon-purple/20 mb-4">
                <Zap size={24} className="text-hackathon-purple" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Win Prizes</h3>
              <p className="text-gray-400">Showcase your skills and win exciting prizes and recognition.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
