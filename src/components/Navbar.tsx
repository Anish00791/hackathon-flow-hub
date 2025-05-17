
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Code, Menu } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Code size={28} className="text-hackathon-purple" />
              <span className="text-xl font-bold bg-gradient-to-r from-hackathon-purple to-hackathon-cyan hero-gradient">
                HackForge
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Link to="/hackathons" className="text-foreground/80 hover:text-foreground px-3 py-2 rounded-md text-sm font-medium">
                Hackathons
              </Link>
              <Link to="/projects" className="text-foreground/80 hover:text-foreground px-3 py-2 rounded-md text-sm font-medium">
                Projects
              </Link>
              <Link to="/resources" className="text-foreground/80 hover:text-foreground px-3 py-2 rounded-md text-sm font-medium">
                Resources
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-3">
              <Link to="/login">
                <Button variant="outline">Log In</Button>
              </Link>
              <Link to="/signup">
                <Button>Sign Up</Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground/70 hover:text-foreground hover:bg-background/90"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/hackathons" className="block px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:text-foreground hover:bg-background/90">
              Hackathons
            </Link>
            <Link to="/projects" className="block px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:text-foreground hover:bg-background/90">
              Projects
            </Link>
            <Link to="/resources" className="block px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:text-foreground hover:bg-background/90">
              Resources
            </Link>
            <div className="flex space-x-2 pt-2 pb-1">
              <Link to="/login" className="w-1/2">
                <Button variant="outline" className="w-full">Log In</Button>
              </Link>
              <Link to="/signup" className="w-1/2">
                <Button className="w-full">Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
