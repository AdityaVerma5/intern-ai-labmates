
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { BarChart, Search, BookOpen, PenTool, Award, Briefcase, LightbulbIcon, Globe, FileText, CheckSquare } from 'lucide-react';

const ForStudents = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-secondary-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
                Kickstart Your Research Career
              </h1>
              <p className="text-lg lg:text-xl mb-8 opacity-90">
                Connect with top professors and research projects that match your skills and interests.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/signup?type=student">
                  <Button className="bg-white text-secondary hover:bg-gray-100 text-base font-medium">
                    Find Research Internships
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-secondary text-base font-medium">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-10">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80" 
                alt="Students in laboratory" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Benefits Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center">Benefits for Students</h2>
          <p className="text-lg text-center mb-16 max-w-3xl mx-auto text-neutral-light">
            Get matched with research opportunities that align with your skills and career goals
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 card-hover">
              <BarChart className="h-12 w-12 text-secondary mb-6" />
              <h3 className="text-xl font-bold mb-3">Stand Out to Professors</h3>
              <p className="text-neutral-light">
                Our AI assessment verifies your skills and helps you stand out from other applicants with objective metrics.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 card-hover">
              <Search className="h-12 w-12 text-secondary mb-6" />
              <h3 className="text-xl font-bold mb-3">Personalized Feedback</h3>
              <p className="text-neutral-light">
                Receive detailed assessment reports highlighting your strengths and areas for improvement in research skills.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 card-hover">
              <BookOpen className="h-12 w-12 text-secondary mb-6" />
              <h3 className="text-xl font-bold mb-3">Exclusive Opportunities</h3>
              <p className="text-neutral-light">
                Access a curated list of research projects not advertised on public platforms or university boards.
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
            Three simple steps to find and secure the perfect research internship
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-secondary text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold">1</div>
              <h3 className="text-xl font-bold mb-3">Create Your Profile</h3>
              <p className="text-neutral-light">
                Build your academic profile highlighting your education, skills, research interests and experience.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-secondary text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold">2</div>
              <h3 className="text-xl font-bold mb-3">Take AI Screening Tests</h3>
              <p className="text-neutral-light">
                Complete domain-specific assessments to demonstrate your knowledge and research aptitude.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-secondary text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold">3</div>
              <h3 className="text-xl font-bold mb-3">Apply to Openings</h3>
              <p className="text-neutral-light">
                Browse matched research opportunities and apply directly through our platform.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/signup?type=student">
              <Button size="lg" className="bg-secondary hover:bg-secondary-dark">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* AI Assessment Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">AI Skill Assessment</h2>
              <p className="text-lg mb-6">
                Our assessments go beyond grades and courses to identify your actual research capabilities.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <PenTool className="h-6 w-6 text-secondary mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold text-xl">Domain Knowledge Tests</h4>
                    <p>Subject-specific assessments across various scientific disciplines</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Award className="h-6 w-6 text-secondary mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold text-xl">Research Aptitude Evaluation</h4>
                    <p>Assessment of critical thinking, experiment design, and analytical skills</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Briefcase className="h-6 w-6 text-secondary mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold text-xl">Skill Verification</h4>
                    <p>Verify technical skills relevant to specific research fields</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <LightbulbIcon className="h-6 w-6 text-secondary mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold text-xl">Personalized Development Plan</h4>
                    <p>Receive tailored suggestions to improve your research skills</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-10">
              <div className="bg-muted p-6 rounded-xl shadow-lg">
                <div className="bg-white p-6 rounded-lg mb-6">
                  <h4 className="text-lg font-bold mb-4">Sample Assessment Report</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-sm mb-2">Subject Knowledge</h5>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-secondary h-2.5 rounded-full" style={{ width: "85%" }}></div>
                      </div>
                      <div className="flex justify-between text-xs mt-1">
                        <span>0%</span>
                        <span className="text-secondary">85%</span>
                        <span>100%</span>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-sm mb-2">Critical Thinking</h5>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-secondary h-2.5 rounded-full" style={{ width: "92%" }}></div>
                      </div>
                      <div className="flex justify-between text-xs mt-1">
                        <span>0%</span>
                        <span className="text-secondary">92%</span>
                        <span>100%</span>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-sm mb-2">Analytical Skills</h5>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-secondary h-2.5 rounded-full" style={{ width: "78%" }}></div>
                      </div>
                      <div className="flex justify-between text-xs mt-1">
                        <span>0%</span>
                        <span className="text-secondary">78%</span>
                        <span>100%</span>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-sm mb-2">Research Methodology</h5>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-secondary h-2.5 rounded-full" style={{ width: "81%" }}></div>
                      </div>
                      <div className="flex justify-between text-xs mt-1">
                        <span>0%</span>
                        <span className="text-secondary">81%</span>
                        <span>100%</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="text-lg font-bold mb-4">Key Strengths</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckSquare className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                      <span>Data analysis and interpretation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckSquare className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                      <span>Experiment design and methodology</span>
                    </li>
                    <li className="flex items-start">
                      <CheckSquare className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                      <span>Scientific literature review skills</span>
                    </li>
                    <li className="flex items-start">
                      <CheckSquare className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                      <span>Problem-solving approach</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Platform Features */}
      <section className="section bg-accent-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center">Student Features</h2>
          <p className="text-lg text-center mb-16 max-w-3xl mx-auto text-neutral-light">
            Tools designed to help you find and succeed in research internships
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <Search className="h-8 w-8 text-secondary mb-4" />
              <h3 className="text-lg font-bold mb-2">Project Matching</h3>
              <p className="text-sm text-neutral-light">
                Get matched with research projects that align with your skills and interests.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <BookOpen className="h-8 w-8 text-secondary mb-4" />
              <h3 className="text-lg font-bold mb-2">Skill Development</h3>
              <p className="text-sm text-neutral-light">
                Access resources to improve specific research skills identified in your assessment.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <Globe className="h-8 w-8 text-secondary mb-4" />
              <h3 className="text-lg font-bold mb-2">Nationwide Opportunities</h3>
              <p className="text-sm text-neutral-light">
                Discover research internships across India, including remote options.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <FileText className="h-8 w-8 text-secondary mb-4" />
              <h3 className="text-lg font-bold mb-2">Application Tracking</h3>
              <p className="text-sm text-neutral-light">
                Track the status of your applications and receive updates from professors.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <Award className="h-8 w-8 text-secondary mb-4" />
              <h3 className="text-lg font-bold mb-2">Digital Portfolio</h3>
              <p className="text-sm text-neutral-light">
                Showcase your projects, skills, and achievements in a professional portfolio.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <Briefcase className="h-8 w-8 text-secondary mb-4" />
              <h3 className="text-lg font-bold mb-2">Research Experience</h3>
              <p className="text-sm text-neutral-light">
                Document your research experience to build a compelling academic resume.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <LightbulbIcon className="h-8 w-8 text-secondary mb-4" />
              <h3 className="text-lg font-bold mb-2">Learning Resources</h3>
              <p className="text-sm text-neutral-light">
                Access guides, tutorials, and materials to enhance your research skills.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <CheckSquare className="h-8 w-8 text-secondary mb-4" />
              <h3 className="text-lg font-bold mb-2">Verified Credentials</h3>
              <p className="text-sm text-neutral-light">
                Earn verified credentials that demonstrate your research capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Join CTA */}
      <section className="section bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Begin Your Research Journey?</h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Join thousands of students who have found meaningful research experiences through Labmates.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup?type=student">
              <Button className="bg-white text-secondary hover:bg-gray-100 text-base font-medium">
                Create Free Account
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-secondary text-base font-medium">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ForStudents;
