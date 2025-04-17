
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Briefcase, FileText, BookOpen, GraduationCap, Calendar, CheckCircle, Clock, X, Plus, Search } from 'lucide-react';

// Mock data for student dashboard
const applications = [
  {
    id: 1,
    position: "AI Research Assistant",
    professor: "Dr. Sharma",
    university: "IIT Delhi",
    status: "Under Review",
    appliedDate: "2023-06-15"
  },
  {
    id: 2,
    position: "Data Science Intern",
    professor: "Dr. Patel",
    university: "IISC Bangalore",
    status: "Shortlisted",
    appliedDate: "2023-06-10"
  },
  {
    id: 3,
    position: "Quantum Computing Research",
    professor: "Dr. Kumar",
    university: "IIT Bombay",
    status: "Rejected",
    appliedDate: "2023-05-25"
  }
];

const recommendedOpenings = [
  {
    id: 1,
    title: "Machine Learning Research Intern",
    professor: "Dr. Rajesh Sharma",
    university: "IIT Madras",
    department: "Computer Science",
    duration: "3 months",
    matchScore: 95
  },
  {
    id: 2,
    title: "NLP Research Assistant",
    professor: "Dr. Anita Desai",
    university: "IIIT Hyderabad",
    department: "AI & ML",
    duration: "6 months",
    matchScore: 87
  },
  {
    id: 3,
    title: "Computer Vision Project",
    professor: "Dr. Vikram Mehta",
    university: "IIT Kanpur",
    department: "Electrical Engineering",
    duration: "4 months",
    matchScore: 82
  }
];

const skills = [
  { name: "Python", level: 90 },
  { name: "Machine Learning", level: 75 },
  { name: "Data Analysis", level: 85 },
  { name: "Research Methodology", level: 60 }
];

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem('labmates_user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    } else {
      // Redirect to login if not logged in
      navigate('/signin');
    }
    setLoading(false);
  }, [navigate]);
  
  const handleLogout = () => {
    localStorage.removeItem('labmates_user');
    navigate('/');
  };

  const getStatusIcon = (status: string) => {
    switch(status) {
      case "Under Review":
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case "Shortlisted":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "Rejected":
        return <X className="h-4 w-4 text-red-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary mx-auto"></div>
          <p className="mt-4">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-1 py-10 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold">Student Dashboard</h1>
              <p className="text-neutral-light">Welcome back, {user?.name || 'Student'}</p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-4">
              <Button
                variant="outline"
                onClick={handleLogout}
              >
                Log out
              </Button>
              <Button className="bg-secondary hover:bg-secondary-dark">
                <Search className="mr-2 h-4 w-4" />
                Find Internships
              </Button>
            </div>
          </div>
          
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="bg-secondary-light bg-opacity-20 p-3 rounded-lg">
                  <Briefcase className="h-8 w-8 text-secondary" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Applications</h3>
                  <p className="text-3xl font-bold">{applications.length}</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="bg-green-100 p-3 rounded-lg">
                  <CheckCircle className="h-8 w-8 text-green-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Shortlisted</h3>
                  <p className="text-3xl font-bold">{applications.filter(app => app.status === "Shortlisted").length}</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="bg-accent-light p-3 rounded-lg">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Profile Completion</h3>
                  <p className="text-3xl font-bold">75%</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Recommended Openings */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">Recommended Research Openings</h2>
                  <Button variant="outline" size="sm">View All</Button>
                </div>
                
                <div className="space-y-6">
                  {recommendedOpenings.map(opening => (
                    <div key={opening.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex flex-col md:flex-row md:items-center justify-between">
                        <div>
                          <h3 className="font-bold text-lg">{opening.title}</h3>
                          <p className="text-neutral-light">{opening.professor} • {opening.university}</p>
                          <div className="mt-2 flex flex-wrap gap-2">
                            <span className="bg-muted px-2 py-1 text-xs rounded-full">{opening.department}</span>
                            <span className="bg-muted px-2 py-1 text-xs rounded-full">{opening.duration}</span>
                          </div>
                        </div>
                        <div className="mt-4 md:mt-0 flex flex-col items-center md:items-end">
                          <div className="text-center md:text-right">
                            <span className="text-xs text-neutral-light">Match Score</span>
                            <div className="text-lg font-bold text-secondary">{opening.matchScore}%</div>
                          </div>
                          <Button size="sm" className="mt-2 bg-secondary hover:bg-secondary-dark">
                            Apply Now
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Your Applications */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">Your Applications</h2>
                  <Button variant="outline" size="sm">View All</Button>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted">
                      <tr>
                        <th className="py-3 px-4 text-left">Position</th>
                        <th className="py-3 px-4 text-left">Professor</th>
                        <th className="py-3 px-4 text-left">University</th>
                        <th className="py-3 px-4 text-left">Status</th>
                        <th className="py-3 px-4 text-left">Applied On</th>
                        <th className="py-3 px-4 text-left">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {applications.map(application => (
                        <tr key={application.id}>
                          <td className="py-4 px-4">{application.position}</td>
                          <td className="py-4 px-4">{application.professor}</td>
                          <td className="py-4 px-4">{application.university}</td>
                          <td className="py-4 px-4">
                            <div className="flex items-center">
                              {getStatusIcon(application.status)}
                              <span className="ml-2">{application.status}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4">{application.appliedDate}</td>
                          <td className="py-4 px-4">
                            <Button variant="ghost" size="sm">View</Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="space-y-8">
              {/* Profile Card */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-lg font-bold mb-4">Your Profile</h2>
                <div className="flex items-center mb-4">
                  <div className="h-16 w-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                    {user?.name ? user.name.charAt(0) : 'S'}
                  </div>
                  <div>
                    <h3 className="font-bold">{user?.name || 'Student Name'}</h3>
                    <p className="text-sm text-neutral-light">{user?.email || 'student@example.com'}</p>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>Profile Completion</span>
                    <span>75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  Complete Your Profile
                </Button>
              </div>
              
              {/* Upcoming Tests */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-lg font-bold mb-4">Upcoming AI Tests</h2>
                <div className="space-y-4">
                  <div className="border rounded-md p-3">
                    <div className="flex items-start">
                      <Calendar className="h-5 w-5 text-secondary mr-3" />
                      <div>
                        <h4 className="font-semibold">Machine Learning Assessment</h4>
                        <p className="text-xs text-neutral-light">Scheduled: Tomorrow, 3:00 PM</p>
                      </div>
                    </div>
                  </div>
                  <div className="border rounded-md p-3">
                    <div className="flex items-start">
                      <Calendar className="h-5 w-5 text-secondary mr-3" />
                      <div>
                        <h4 className="font-semibold">Research Aptitude Test</h4>
                        <p className="text-xs text-neutral-light">Scheduled: 22 Jun, 10:00 AM</p>
                      </div>
                    </div>
                  </div>
                </div>
                <Button size="sm" className="mt-4 w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Schedule New Test
                </Button>
              </div>
              
              {/* Skills */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-bold">Your Skills</h2>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="space-y-4">
                  {skills.map(skill => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Quick Links */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-lg font-bold mb-4">Quick Links</h2>
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start text-left">
                    <FileText className="h-4 w-4 mr-2" />
                    Assessment Reports
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-left">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Learning Resources
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-left">
                    <Briefcase className="h-4 w-4 mr-2" />
                    Saved Internships
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default StudentDashboard;
