
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { Eye, EyeOff, User, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';

const SignUp = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialType = queryParams.get('type') || '';
  const isPilot = queryParams.get('pilot') === 'true';
  
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    userType: initialType || 'student',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    institution: '',
    department: '',
    position: '',
    degree: '',
    year: '',
    researchInterests: '',
    agreeTerms: false,
    marketingConsent: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleRadioChange = (value: string) => {
    setFormData({
      ...formData,
      userType: value
    });
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData({
      ...formData,
      [name]: checked
    });
  };

  const nextStep = () => {
    if (step === 1) {
      // Validate first step
      if (!formData.firstName || !formData.lastName || !formData.email) {
        toast({
          title: "Required Fields Missing",
          description: "Please fill in all required fields.",
          variant: "destructive"
        });
        return;
      }
      
      // Validate email format
      if (!formData.email.includes('@')) {
        toast({
          title: "Invalid Email",
          description: "Please enter a valid email address.",
          variant: "destructive"
        });
        return;
      }
      
      // Validate password
      if (formData.password.length < 8) {
        toast({
          title: "Invalid Password",
          description: "Password must be at least 8 characters long.",
          variant: "destructive"
        });
        return;
      }
      
      // Validate password match
      if (formData.password !== formData.confirmPassword) {
        toast({
          title: "Passwords Don't Match",
          description: "Please make sure your passwords match.",
          variant: "destructive"
        });
        return;
      }
    }
    
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate final step
    if (!formData.agreeTerms) {
      toast({
        title: "Terms Required",
        description: "You must agree to our terms and conditions.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }
    
    // Simulate registration
    setTimeout(() => {
      localStorage.setItem('labmates_user', JSON.stringify({
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        userType: formData.userType,
        isLoggedIn: true
      }));
      
      toast({
        title: "Registration Successful",
        description: "Your account has been created successfully."
      });
      
      // Redirect based on user type
      if (formData.userType === 'professor') {
        navigate('/professor-dashboard');
      } else {
        navigate('/student-dashboard');
      }
    }, 1500);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  // Set user type from URL param if present
  useEffect(() => {
    if (initialType && (initialType === 'professor' || initialType === 'student')) {
      setFormData(prev => ({
        ...prev,
        userType: initialType
      }));
    }
  }, [initialType]);

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
            
            <h1 className="text-3xl font-bold mb-2">Create your account</h1>
            <p className="text-neutral-light mb-8">
              {isPilot ? "Join our exclusive pilot program" : "Join our platform to connect with research opportunities"}
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {step === 1 && (
                <>
                  <div className="space-y-4">
                    <Label>I am a</Label>
                    <RadioGroup 
                      defaultValue={formData.userType} 
                      onValueChange={handleRadioChange}
                      className="flex gap-6"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="professor" id="professor" />
                        <Label htmlFor="professor" className="flex items-center cursor-pointer">
                          <User className="mr-2 h-5 w-5 text-primary" />
                          Professor
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="student" id="student" />
                        <Label htmlFor="student" className="flex items-center cursor-pointer">
                          <BookOpen className="mr-2 h-5 w-5 text-secondary" />
                          Student
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name*</Label>
                      <Input 
                        id="firstName" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name*</Label>
                      <Input 
                        id="lastName" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email*</Label>
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
                    <Label htmlFor="password">Password*</Label>
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
                    <p className="text-xs text-neutral-light mt-1">
                      Password must be at least 8 characters long
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password*</Label>
                    <Input 
                      id="confirmPassword" 
                      name="confirmPassword"
                      type={showPassword ? "text" : "password"} 
                      placeholder="••••••••" 
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </>
              )}
              
              {step === 2 && (
                <>
                  {formData.userType === 'professor' ? (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="institution">Institution*</Label>
                        <Input 
                          id="institution" 
                          name="institution"
                          placeholder="University/Institution name" 
                          value={formData.institution}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="department">Department*</Label>
                        <Input 
                          id="department" 
                          name="department"
                          placeholder="e.g. Computer Science, Biology" 
                          value={formData.department}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="position">Position*</Label>
                        <Select 
                          value={formData.position} 
                          onValueChange={(value) => handleSelectChange('position', value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select your position" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="assistant_professor">Assistant Professor</SelectItem>
                            <SelectItem value="associate_professor">Associate Professor</SelectItem>
                            <SelectItem value="professor">Professor</SelectItem>
                            <SelectItem value="department_head">Department Head</SelectItem>
                            <SelectItem value="researcher">Researcher</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="researchInterests">Research Interests*</Label>
                        <Input 
                          id="researchInterests" 
                          name="researchInterests"
                          placeholder="e.g. Machine Learning, Genomics" 
                          value={formData.researchInterests}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="institution">Institution*</Label>
                        <Input 
                          id="institution" 
                          name="institution"
                          placeholder="University/College name" 
                          value={formData.institution}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="degree">Degree*</Label>
                        <Select 
                          value={formData.degree} 
                          onValueChange={(value) => handleSelectChange('degree', value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select your degree" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="bachelors">Bachelor's (B.Tech/B.Sc/B.A)</SelectItem>
                            <SelectItem value="masters">Master's (M.Tech/M.Sc/M.A)</SelectItem>
                            <SelectItem value="phd">Ph.D</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="year">Year of Study*</Label>
                        <Select 
                          value={formData.year} 
                          onValueChange={(value) => handleSelectChange('year', value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select your year" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1st Year</SelectItem>
                            <SelectItem value="2">2nd Year</SelectItem>
                            <SelectItem value="3">3rd Year</SelectItem>
                            <SelectItem value="4">4th Year</SelectItem>
                            <SelectItem value="5">5th Year</SelectItem>
                            <SelectItem value="final">Final Year</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="department">Department/Major*</Label>
                        <Input 
                          id="department" 
                          name="department"
                          placeholder="e.g. Computer Science, Biology" 
                          value={formData.department}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="researchInterests">Research Interests*</Label>
                        <Input 
                          id="researchInterests" 
                          name="researchInterests"
                          placeholder="e.g. Machine Learning, Genomics" 
                          value={formData.researchInterests}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </>
                  )}
                </>
              )}
              
              {step === 3 && (
                <>
                  <div className="space-y-4">
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="agreeTerms" 
                          checked={formData.agreeTerms} 
                          onCheckedChange={(checked) => handleCheckboxChange('agreeTerms', !!checked)}
                        />
                        <Label htmlFor="agreeTerms" className="text-sm">
                          I agree to Labmates' <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link> and <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>
                        </Label>
                      </div>
                    </div>
                    
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="marketingConsent" 
                          checked={formData.marketingConsent} 
                          onCheckedChange={(checked) => handleCheckboxChange('marketingConsent', !!checked)}
                        />
                        <Label htmlFor="marketingConsent" className="text-sm">
                          I agree to receive emails about new research opportunities, tips, and updates from Labmates (optional)
                        </Label>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary-dark"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Creating account..." : "Create Account"}
                  </Button>
                </>
              )}
              
              {step !== 3 && (
                <Button 
                  type="button" 
                  className="w-full bg-primary hover:bg-primary-dark"
                  onClick={nextStep}
                >
                  Next <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              )}
              
              {step > 1 && (
                <Button 
                  type="button" 
                  variant="outline"
                  className="w-full mt-2"
                  onClick={prevStep}
                >
                  <ChevronLeft className="mr-2 h-4 w-4" /> Back
                </Button>
              )}
              
              <div className="text-center">
                <p className="text-sm text-neutral-light">
                  Already have an account?{" "}
                  <Link to="/signin" className="text-primary hover:underline font-medium">
                    Sign in
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
        
        {/* Right side - Image background */}
        <div className="hidden lg:block lg:w-1/2 bg-gradient-to-r from-primary-dark to-primary">
          <div className="h-full flex items-center justify-center p-12">
            <div className="max-w-lg text-white">
              <h2 className="text-3xl font-bold mb-6">
                {formData.userType === 'professor' 
                  ? "Find exceptional research interns" 
                  : "Discover exciting research opportunities"
                }
              </h2>
              <p className="text-lg mb-8 opacity-90">
                {formData.userType === 'professor'
                  ? "Save time and resources by connecting with pre-screened students who match your research requirements."
                  : "Showcase your skills and connect with leading professors for meaningful research internships."
                }
              </p>
              
              <div className="space-y-4">
                {formData.userType === 'professor' ? (
                  <>
                    <div className="flex items-start space-x-3">
                      <div className="bg-white text-primary rounded-full p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="opacity-90">AI-powered screening of student applicants</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-white text-primary rounded-full p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="opacity-90">Detailed skill assessment reports</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-white text-primary rounded-full p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="opacity-90">Efficient intern management tools</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-start space-x-3">
                      <div className="bg-white text-primary rounded-full p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="opacity-90">Personalized matching with research projects</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-white text-primary rounded-full p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="opacity-90">Showcase your skills with verified assessments</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-white text-primary rounded-full p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="opacity-90">Access exclusive research opportunities</p>
                    </div>
                  </>
                )}
              </div>
              
              {isPilot && (
                <div className="mt-8 p-4 bg-white bg-opacity-10 rounded-lg">
                  <h3 className="font-bold mb-2">Pilot Program</h3>
                  <p className="text-sm opacity-90">
                    You're joining our exclusive pilot program! Get early access to premium features and help shape the future of Labmates.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
