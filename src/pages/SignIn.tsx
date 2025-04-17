
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { Eye, EyeOff } from 'lucide-react';

const SignIn = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData({
      ...formData,
      rememberMe: checked
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate authentication
    setTimeout(() => {
      // For demo purposes, just check for a valid email format and minimum password length
      if (!formData.email.includes('@') || formData.password.length < 6) {
        toast({
          title: "Login Failed",
          description: "Invalid email or password. Please try again.",
          variant: "destructive"
        });
        setIsSubmitting(false);
        return;
      }
      
      localStorage.setItem('labmates_user', JSON.stringify({ 
        email: formData.email, 
        isLoggedIn: true 
      }));
      
      toast({
        title: "Login Successful",
        description: "You have been signed in successfully."
      });
      
      // Redirect to dashboard based on email domain
      // This is just a demo logic - in a real app, you would use role from authentication
      if (formData.email.includes("professor") || formData.email.includes("edu")) {
        navigate('/professor-dashboard');
      } else {
        navigate('/student-dashboard');
      }
    }, 1500);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex min-h-screen">
        {/* Left side - Form */}
        <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <div className="w-full max-w-md mx-auto">
            <Link to="/" className="inline-block mb-8">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-primary">Labmates</span>
              </div>
            </Link>
            
            <h1 className="text-3xl font-bold mb-2">Welcome back</h1>
            <p className="text-neutral-light mb-8">Please sign in to access your account</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  name="email"
                  type="email" 
                  placeholder="your@email.com" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Input 
                    id="password" 
                    name="password"
                    type={showPassword ? "text" : "password"} 
                    placeholder="••••••••" 
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <button 
                    type="button" 
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="rememberMe" 
                  checked={formData.rememberMe} 
                  onCheckedChange={handleCheckboxChange}
                />
                <Label htmlFor="rememberMe" className="text-sm cursor-pointer">Remember me for 30 days</Label>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary-dark"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Signing in..." : "Sign In"}
              </Button>
              
              <div className="text-center">
                <p className="text-sm text-neutral-light">
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-primary hover:underline font-medium">
                    Sign up
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
        
        {/* Right side - Image background */}
        <div className="hidden lg:block lg:w-1/2 bg-primary">
          <div className="h-full flex items-center justify-center p-12">
            <div className="max-w-lg text-white">
              <h2 className="text-3xl font-bold mb-6">Start your research journey with Labmates</h2>
              <p className="text-lg mb-8 opacity-90">
                Connect with leading professors and talented students for meaningful research collaborations.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm opacity-90">Professors</div>
                </div>
                <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                  <div className="text-2xl font-bold">5,000+</div>
                  <div className="text-sm opacity-90">Students</div>
                </div>
                <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                  <div className="text-2xl font-bold">200+</div>
                  <div className="text-sm opacity-90">Universities</div>
                </div>
                <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                  <div className="text-2xl font-bold">1,000+</div>
                  <div className="text-sm opacity-90">Successful Matches</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
