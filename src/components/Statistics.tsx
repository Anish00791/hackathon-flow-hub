
import React from 'react';
import { Code, Users, Award, Globe } from 'lucide-react';

interface StatProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

const Stat: React.FC<StatProps> = ({ value, label, icon }) => {
  return (
    <div className="text-center p-8">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-hackathon-purple/20 mb-6">
        {icon}
      </div>
      <div className="text-4xl font-bold mb-2">{value}</div>
      <div className="text-muted-foreground">{label}</div>
    </div>
  );
};

const Statistics = () => {
  return (
    <section className="py-20 bg-hackathon-dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Making an Impact</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Empowering developers, designers, and innovators to create solutions that matter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <Stat 
            value="250+" 
            label="Hackathons Hosted" 
            icon={<Code size={32} className="text-hackathon-purple" />} 
          />
          <Stat 
            value="15,000+" 
            label="Active Participants" 
            icon={<Users size={32} className="text-hackathon-purple" />} 
          />
          <Stat 
            value="4,500+" 
            label="Projects Completed" 
            icon={<Award size={32} className="text-hackathon-purple" />} 
          />
          <Stat 
            value="60+" 
            label="Countries Represented" 
            icon={<Globe size={32} className="text-hackathon-purple" />} 
          />
        </div>
      </div>
    </section>
  );
};

export default Statistics;
