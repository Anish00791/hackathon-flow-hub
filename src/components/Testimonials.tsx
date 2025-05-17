
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  company: string;
  image: string;
}

const testimonials: TestimonialProps[] = [
  {
    quote: "HackForge has transformed how we run our company hackathons. The platform made team formation and project submission seamless.",
    name: "Alex Johnson",
    role: "CTO",
    company: "TechInnovate",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote: "As a first-time hackathon participant, HackForge made the experience incredibly accessible and engaging. I found amazing teammates!",
    name: "Sophia Chen",
    role: "Software Developer",
    company: "CodeCraft",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote: "We've used HackForge to host three university-wide hackathons so far, and it's been a game-changer for managing registrations and submissions.",
    name: "Marcus Williams",
    role: "Professor",
    company: "Tech University",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
];

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, name, role, company, image }) => {
  return (
    <Card className="border-0 shadow-lg bg-white dark:bg-hackathon-dark">
      <CardContent className="p-8">
        <div className="mb-6">
          <svg width="45" height="36" className="text-hackathon-purple opacity-20">
            <path
              d="M13.415.43c-2.523-.323-4.587.42-6.195 2.225C5.603 4.47 4.8 6.768 4.805 9.519c-.01 3.854 1.465 6.74 4.426 8.66 2.96 1.91 6.452 1.809 10.475-.297l.275 1.004c-.284 1.413-.51 2.663-.69 3.75-.18 1.086-.263 2.672-.263 4.768h6.98c0-2.965.11-5.52.326-7.665.216-2.155.856-4.58 1.918-7.283s2.463-5.554 4.192-8.55l-2.69-1.878c-1.434 1.695-2.703 2.904-3.814 3.628-1.102.714-2.058 1.086-2.867 1.086-1.776 0-2.197-1.817-1.264-5.44l-8.364-1.878zm23.42 9.99c-2.524-.323-4.587.42-6.196 2.225-1.65 1.794-2.473 4.092-2.478 6.868-.01 3.854 1.466 6.74 4.427 8.66 2.96 1.91 6.452 1.809 10.474-.297l.275 1.004c-.283 1.413-.51 2.663-.69 3.75-.18 1.086-.263 2.672-.263 4.768h6.98c0-2.965.11-5.52.327-7.665.216-2.155.855-4.58 1.917-7.283 1.06-2.704 2.462-5.554 4.193-8.55l-2.69-1.878c-1.434 1.695-2.704 2.904-3.814 3.628-1.102.714-2.058 1.086-2.868 1.086-1.776 0-2.197-1.817-1.263-5.44l-8.362-1.878z"
              fill="currentColor"
            />
          </svg>
        </div>
        <p className="text-lg mb-8">{quote}</p>
        <div className="flex items-center">
          <Avatar className="h-12 w-12 mr-4">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-bold">{name}</h4>
            <p className="text-sm text-muted-foreground">{role}, {company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Testimonials = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">What People Are Saying</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from organizers and participants who have experienced the HackForge platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
