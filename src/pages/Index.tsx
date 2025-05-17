
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedHackathons from '@/components/FeaturedHackathons';
import Statistics from '@/components/Statistics';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>HackForge - Hackathon Management Platform</title>
        <meta name="description" content="Create, manage, and participate in hackathons that drive innovation and collaboration." />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <FeaturedHackathons />
          <Statistics />
          <Testimonials />
          <CallToAction />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
