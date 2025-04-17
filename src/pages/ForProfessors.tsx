
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Clock, CheckCircle, Award, Search, BookOpen, FileText, UserCheck, Filter, Briefcase, Mail } from 'lucide-react';

const ForProfessors = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
                Find Exceptional Research Interns
              </h1>
              <p className="text-lg lg:text-xl mb-8 opacity-90">
                Save time and resources by using our AI-powered platform to connect with qualified student researchers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/signup?type=professor">
                  <Button className="bg-white text-primary hover:bg-gray-100 text-base font-medium">
                    Post a Research Opening
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-base font-medium">
                    Request a Demo
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-10">
              <img 
                src="https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80" 
                alt="Professor teaching in laboratory" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Benefits Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center">Benefits for Professors</h2>
          <p className="text-lg text-center mb-16 max-w-3xl mx-auto text-neutral-light">
            Our platform is designed to solve the common challenges professors face when recruiting research interns
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 card-hover">
              <Clock className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-3">Save Valuable Time</h3>
              <p className="text-neutral-light">
                No more sifting through hundreds of applications. Our AI pre-screens candidates based on your specific requirements.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 card-hover">
              <CheckCircle className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-3">Quality Matches</h3>
              <p className="text-neutral-light">
                Connect with students who have been rigorously assessed for both technical skills and research aptitude.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 card-hover">
              <Award className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-3">Streamlined Management</h3>
              <p className="text-neutral-light">
                Manage your research team, schedule meetings, share resources, and track progress all in one place.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="section bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center">How It Works</h2>
          <p className="text-lg text-center mb-16 max-w-3xl mx-auto text-neutral-light">
            Three simple steps to find the perfect research interns for your projects
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold">1</div>
              <h3 className="text-xl font-bold mb-3">Create Your Profile</h3>
              <p className="text-neutral-light">
                Set up your academic profile with your research interests, lab information, and current projects.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold">2</div>
              <h3 className="text-xl font-bold mb-3">Post Research Openings</h3>
              <p className="text-neutral-light">
                Specify your requirements, project details, duration, and the skills you're looking for in interns.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold">3</div>
              <h3 className="text-xl font-bold mb-3">Select Pre-Screened Candidates</h3>
              <p className="text-neutral-light">
                Review AI-vetted applications, view skill assessments, and connect with the best matches.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/signup?type=professor">
              <Button size="lg" className="bg-primary hover:bg-primary-dark">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Platform Features */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center">Platform Features</h2>
          <p className="text-lg text-center mb-16 max-w-3xl mx-auto text-neutral-light">
            Tools designed specifically for research professors and lab directors
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <Search className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2">Advanced Search</h3>
              <p className="text-sm text-neutral-light">
                Find students with specific skills, academic backgrounds, or research interests.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <BookOpen className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2">Skill Assessment Reports</h3>
              <p className="text-sm text-neutral-light">
                Access detailed reports on student aptitude, knowledge, and problem-solving abilities.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <FileText className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2">Project Management</h3>
              <p className="text-sm text-neutral-light">
                Organize research tasks, set milestones, and track progress of your interns.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <UserCheck className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2">Performance Tracking</h3>
              <p className="text-sm text-neutral-light">
                Monitor intern performance and provide feedback through structured evaluation tools.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <Filter className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2">Custom Screening</h3>
              <p className="text-sm text-neutral-light">
                Create custom screening criteria specific to your research field or project.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <Briefcase className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2">Resource Sharing</h3>
              <p className="text-sm text-neutral-light">
                Securely share research papers, data, and other materials with your interns.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <Mail className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2">Integrated Communication</h3>
              <p className="text-sm text-neutral-light">
                Message candidates and interns directly through our platform's messaging system.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <Clock className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2">Scheduling Tools</h3>
              <p className="text-sm text-neutral-light">
                Easily coordinate meetings, lab sessions, and presentations with calendar integration.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Join CTA */}
      <section className="section bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Transform Your Research Team?</h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Join hundreds of professors who are saving time and finding exceptional research talent through Labmates.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup?type=professor">
              <Button className="bg-white text-primary hover:bg-gray-100 text-base font-medium">
                Create Free Account
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-base font-medium">
                Schedule a Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ForProfessors;
