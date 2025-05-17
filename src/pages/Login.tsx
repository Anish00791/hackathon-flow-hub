import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { authService, LoginRequest } from '@/services/authService';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    try {
      setIsLoading(true);
      
      const credentials: LoginRequest = {
        email,
        password,
      };
      
      await authService.login(credentials);
      
      toast({
        title: "Success!",
        description: "You have been logged in successfully.",
      });
      
      navigate('/dashboard');
    } catch (error: any) {
      console.error("Login error:", error);
      
      toast({
        title: "Login Failed",
        description: error.data?.message || "Invalid email or password. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Login - HackForge</title>
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow flex items-center justify-center bg-slate-50 py-12">
          <div className="w-full max-w-md px-8 py-10 bg-white rounded-xl shadow-lg">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold">Welcome Back</h1>
              <p className="text-muted-foreground mt-2">Log in to your HackForge account</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Logging in..." : "Log In"}
              </Button>
              
              <p className="text-center text-sm mt-6">
                Don't have an account?{" "}
                <Link to="/signup" className="text-hackathon-purple hover:underline font-medium">
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Login; 