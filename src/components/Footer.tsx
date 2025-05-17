
import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-hackathon-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code size={24} className="text-hackathon-purple" />
              <span className="text-xl font-bold bg-gradient-to-r from-hackathon-purple to-hackathon-cyan hero-gradient">
                HackForge
              </span>
            </div>
            <p className="text-sm text-gray-300">
              The ultimate platform for creating and managing hackathons that inspire innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Hackathons</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/hackathons" className="text-gray-300 hover:text-white text-sm">
                  Browse All
                </Link>
              </li>
              <li>
                <Link to="/hackathons/upcoming" className="text-gray-300 hover:text-white text-sm">
                  Upcoming
                </Link>
              </li>
              <li>
                <Link to="/hackathons/past" className="text-gray-300 hover:text-white text-sm">
                  Past Events
                </Link>
              </li>
              <li>
                <Link to="/hackathons/create" className="text-gray-300 hover:text-white text-sm">
                  Host a Hackathon
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/resources/guides" className="text-gray-300 hover:text-white text-sm">
                  Participant Guides
                </Link>
              </li>
              <li>
                <Link to="/resources/organizers" className="text-gray-300 hover:text-white text-sm">
                  Organizer Resources
                </Link>
              </li>
              <li>
                <Link to="/resources/api" className="text-gray-300 hover:text-white text-sm">
                  API Documentation
                </Link>
              </li>
              <li>
                <Link to="/resources/faq" className="text-gray-300 hover:text-white text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} HackForge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
