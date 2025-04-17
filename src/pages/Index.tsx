
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { User, BookOpen, Search, CheckCircle, PenTool, BarChart, PieChart, Database, Clock, Award } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
                Connecting Research Talent with Opportunities
              </h1>
              <p className="text-lg lg:text-xl mb-8 opacity-90">
                Improving research culture in India by helping professors find capable student interns through AI-based screening.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/signup?type=professor">
                  <Button className="bg-white text-primary hover:bg-gray-100 text-base font-medium">
                    Post a Research Opening
                  </Button>
                </Link>
                <Link to="/signup?type=student">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-base font-medium">
                    Find Research Internships
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-10">
              <img 
                src="https://images.unsplash.com/photo-1581093458791-9b17b3c1b3f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80" 
                alt="Laboratory research" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-neutral-light text-lg max-w-2xl mx-auto">
              Our platform streamlines the research internship process for both professors and students
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <User className="mr-2 text-primary" />
                For Professors
              </h3>
              
              <div className="space-y-10">
                <div className="flex">
                  <div className="flex-shrink-0 mr-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold">1</div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Post Research Opening</h4>
                    <p className="text-neutral-light">
                      Create a detailed listing of your research project, requirements, and expectations.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold">2</div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">AI-Screened Applicants</h4>
                    <p className="text-neutral-light">
                      Our AI evaluates and ranks student applications based on relevant skills and aptitude.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold">3</div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Select Interns</h4>
                    <p className="text-neutral-light">
                      Choose from pre-screened candidates and manage them through our platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <BookOpen className="mr-2 text-secondary" />
                For Students
              </h3>
              
              <div className="space-y-10">
                <div className="flex">
                  <div className="flex-shrink-0 mr-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-white font-bold">1</div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Sign Up</h4>
                    <p className="text-neutral-light">
                      Create your profile highlighting your academic background, skills, and research interests.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-white font-bold">2</div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Take Screening Test</h4>
                    <p className="text-neutral-light">
                      Complete domain-specific AI assessments to showcase your research aptitude.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-white font-bold">3</div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Apply for Openings</h4>
                    <p className="text-neutral-light">
                      Browse and apply to research opportunities matching your skills and interests.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/signup">
              <Button size="lg" className="bg-primary hover:bg-primary-dark">
                Join Labmates Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* AI Screening Test Section */}
      <section className="section bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">AI Screening Test</h2>
              <p className="text-lg mb-6">
                Our proprietary domain-specific AI assessment helps identify student capabilities beyond their resume.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold text-xl">Subject Knowledge Tests</h4>
                    <p>Domain-specific assessments across various research fields</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold text-xl">Critical Thinking Analysis</h4>
                    <p>Evaluation of research aptitude and problem-solving skills</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold text-xl">Comprehensive Reports</h4>
                    <p>Detailed insights on student capabilities for professors</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-10">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <h5 className="font-mono text-sm text-gray-500 mb-2">// AI Screening Sample</h5>
                  <div className="font-mono text-sm">
                    <div className="text-green-600">{'>'} Analyzing domain knowledge in Molecular Biology</div>
                    <div className="text-blue-600">{'>'} Topic: CRISPR-Cas9 Gene Editing</div>
                    <div className="text-gray-800">{'>'} Running assessment modules...</div>
                    <div className="text-gray-800">{'>'} Theoretical knowledge: 92%</div>
                    <div className="text-gray-800">{'>'} Practical application: 85%</div>
                    <div className="text-gray-800">{'>'} Research potential: 89%</div>
                    <div className="text-green-600 mt-2">{'>'} Overall aptitude score: 88.7%</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-100 p-3 rounded-lg flex items-center">
                    <BarChart className="text-primary mr-2" />
                    <span className="text-sm">Skill Assessment</span>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg flex items-center">
                    <PieChart className="text-primary mr-2" />
                    <span className="text-sm">Subject Analysis</span>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg flex items-center">
                    <Database className="text-primary mr-2" />
                    <span className="text-sm">Knowledge Base</span>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg flex items-center">
                    <PenTool className="text-primary mr-2" />
                    <span className="text-sm">Aptitude Test</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* For Professors Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center">For Professors</h2>
          <p className="text-lg text-center mb-16 max-w-3xl mx-auto text-neutral-light">
            Find qualified research interns without spending hours sorting through applications
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 card-hover">
              <Clock className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-3">Save Time</h3>
              <p className="text-neutral-light">
                Reduce administrative burden with AI-powered application screening that evaluates student aptitude and skills.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 card-hover">
              <CheckCircle className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-3">Quality Applications</h3>
              <p className="text-neutral-light">
                Receive applications from pre-screened students with verified skills matching your research requirements.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 card-hover">
              <Award className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-3">Manage Interns Easily</h3>
              <p className="text-neutral-light">
                Track progress, share resources, and collaborate with interns through our dedicated dashboard.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/for-professors">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Learn More for Professors
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* For Students Section */}
      <section className="section bg-accent-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center">For Students</h2>
          <p className="text-lg text-center mb-16 max-w-3xl mx-auto text-neutral-light">
            Discover research opportunities that match your skills and interests
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 card-hover">
              <BarChart className="h-12 w-12 text-secondary mb-6" />
              <h3 className="text-xl font-bold mb-3">Improve Your Chances</h3>
              <p className="text-neutral-light">
                Stand out with AI-verified skills and get matched to research opportunities aligned with your capabilities.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 card-hover">
              <Search className="h-12 w-12 text-secondary mb-6" />
              <h3 className="text-xl font-bold mb-3">Feedback Reports</h3>
              <p className="text-neutral-light">
                Receive detailed assessment feedback to understand your strengths and areas for improvement.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 card-hover">
              <BookOpen className="h-12 w-12 text-secondary mb-6" />
              <h3 className="text-xl font-bold mb-3">Exclusive Projects</h3>
              <p className="text-neutral-light">
                Access research opportunities not advertised elsewhere, curated specifically for Labmates students.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/for-students">
              <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white">
                Learn More for Students
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials/Join Pilot Section */}
      <section className="section bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Join Our Pilot Program</h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            We're inviting select universities and research institutions to join our exclusive pilot program.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-10 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">For Professors</h3>
              <p className="mb-6 opacity-90">
                Get early access to our platform and help shape the future of research internship recruitment.
              </p>
              <Link to="/signup?type=professor&pilot=true">
                <Button className="bg-white text-primary hover:bg-gray-100">
                  Join as Professor
                </Button>
              </Link>
            </div>
            
            <div className="bg-white bg-opacity-10 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">For Students</h3>
              <p className="mb-6 opacity-90">
                Gain exclusive access to premium research opportunities and cutting-edge AI assessments.
              </p>
              <Link to="/signup?type=student&pilot=true">
                <Button className="bg-white text-primary hover:bg-gray-100">
                  Join as Student
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
