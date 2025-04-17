
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Target, Users, TrendingUp, Award, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-dark to-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
              About Labmates
            </h1>
            <p className="text-xl opacity-90 mb-8">
              We're building the future of research internships in India by connecting talented students with leading professors through AI-powered matching.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Mission Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg mb-6">
                At Labmates, we're on a mission to transform research culture in India by making it easier for talented students to connect with innovative professors for meaningful research internships.
              </p>
              <p className="text-lg mb-6">
                We believe that great research happens when the right minds come together. Our AI-powered platform removes traditional barriers and inefficiencies in the research recruitment process, creating more opportunities for collaboration and innovation.
              </p>
              <div className="flex items-center">
                <Target className="h-10 w-10 text-primary mr-4" />
                <p className="text-xl font-bold">Connecting talent with opportunity</p>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-10">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80" 
                alt="Research team collaborating" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="section bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pl-10">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg mb-6">
                Labmates was founded by a team of professors and students who experienced firsthand the challenges of finding the right research matches. Our founders spent countless hours reviewing applications, while talented students struggled to find opportunities that matched their skills.
              </p>
              <p className="text-lg mb-6">
                We realized that technology could solve this problem by creating a more efficient, transparent, and meritocratic system for research internship matching. With backgrounds in AI, education technology, and academic research, our team developed an innovative platform designed specifically for the Indian research ecosystem.
              </p>
              <p className="text-lg">
                Today, Labmates is transforming how research internships work across India, helping professors save time and students find meaningful opportunities.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80" 
                alt="Team discussion" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center">Our Values</h2>
          <p className="text-lg text-center mb-16 max-w-3xl mx-auto text-neutral-light">
            These core principles guide everything we do at Labmates
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 text-center">
              <div className="bg-primary-light bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Inclusion</h3>
              <p className="text-neutral-light">
                Making research opportunities accessible to talented students regardless of their institution or background.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 text-center">
              <div className="bg-primary-light bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-neutral-light">
                Promoting high standards in research by connecting professors with students who have the right skills and passion.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 text-center">
              <div className="bg-primary-light bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-neutral-light">
                Using technology to solve traditional challenges in academic recruitment and research collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Statistics Section */}
      <section className="section bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <p>Professors</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <p>Students</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <p>Universities</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1,000+</div>
              <p>Successful Matches</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center">Our Team</h2>
          <p className="text-lg text-center mb-16 max-w-3xl mx-auto text-neutral-light">
            Meet the passionate individuals behind Labmates
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80" 
                  alt="Dr. Raj Sharma" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Dr. Raj Sharma</h3>
              <p className="text-primary mb-2">Co-Founder & CEO</p>
              <p className="text-sm text-neutral-light">Former Professor at IIT Delhi with 15 years of research experience</p>
            </div>
            
            <div className="text-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80" 
                  alt="Dr. Priya Patel" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Dr. Priya Patel</h3>
              <p className="text-primary mb-2">Co-Founder & CTO</p>
              <p className="text-sm text-neutral-light">AI researcher with experience at Google Research and IISc Bangalore</p>
            </div>
            
            <div className="text-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80" 
                  alt="Aditya Mehta" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Aditya Mehta</h3>
              <p className="text-primary mb-2">Head of Product</p>
              <p className="text-sm text-neutral-light">Former student researcher turned product designer with UX expertise</p>
            </div>
            
            <div className="text-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80" 
                  alt="Dr. Meera Singh" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Dr. Meera Singh</h3>
              <p className="text-primary mb-2">Chief Academic Officer</p>
              <p className="text-sm text-neutral-light">Education expert with experience at multiple top universities</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="mb-6">We're backed by a team of advisors from leading academic institutions across India</p>
            <Link to="/contact">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Join Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Join CTA */}
      <section className="section bg-accent-light">
        <div className="container mx-auto px-4 text-center">
          <BookOpen className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Join the Labmates Community</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Whether you're a professor looking for talented interns or a student seeking research opportunities, Labmates is here to help.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup?type=professor">
              <Button className="bg-primary hover:bg-primary-dark text-white">
                Sign Up as Professor
              </Button>
            </Link>
            <Link to="/signup?type=student">
              <Button className="bg-secondary hover:bg-secondary-dark text-white">
                Sign Up as Student
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
