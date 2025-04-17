
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Users, BookOpen, Plus, UserX, PieChart } from 'lucide-react';

// Mock data for professor dashboard
const openings = [
  {
    id: 1,
    title: "AI Research Assistant",
    department: "Computer Science",
    applicants: 12,
    status: "Open",
    deadline: "2023-06-30"
  },
  {
    id: 2,
    title: "Quantum Computing Research Intern",
    department: "Physics",
    applicants: 8,
    status: "Open",
    deadline: "2023-07-15"
  },
  {
    id: 3,
    title: "Molecular Biology Lab Assistant",
    department: "Life Sciences",
    applicants: 5,
    status: "Closed",
    deadline: "2023-05-20"
  }
];

const applicantStats = {
  total: 25,
  shortlisted: 10,
  interviewed: 5,
  selected: 3,
  rejected: 7
};

const ProfessorDashboard = () => {
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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
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
              <h1 className="text-3xl font-bold">Professor Dashboard</h1>
              <p className="text-neutral-light">Welcome back, {user?.name || 'Professor'}</p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-4">
              <Button
                variant="outline"
                onClick={handleLogout}
              >
                Log out
              </Button>
              <Button className="bg-primary hover:bg-primary-dark">
                <Plus className="mr-2 h-4 w-4" />
                Post New Opening
              </Button>
            </div>
          </div>
          
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="bg-primary-light bg-opacity-20 p-3 rounded-lg">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Active Openings</h3>
                  <p className="text-3xl font-bold">{openings.filter(opening => opening.status === "Open").length}</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="bg-secondary-light bg-opacity-20 p-3 rounded-lg">
                  <BookOpen className="h-8 w-8 text-secondary" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Total Applications</h3>
                  <p className="text-3xl font-bold">{applicantStats.total}</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="bg-accent-light p-3 rounded-lg">
                  <UserX className="h-8 w-8 text-primary" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Pending Review</h3>
                  <p className="text-3xl font-bold">
                    {applicantStats.total - (applicantStats.shortlisted + applicantStats.rejected)}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Application Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Application Status</h2>
                <PieChart className="h-5 w-5 text-neutral-light" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Shortlisted</span>
                        <span className="font-semibold">{applicantStats.shortlisted}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full" 
                          style={{ width: `${(applicantStats.shortlisted / applicantStats.total) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Interviewed</span>
                        <span className="font-semibold">{applicantStats.interviewed}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-secondary h-2 rounded-full" 
                          style={{ width: `${(applicantStats.interviewed / applicantStats.total) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Selected</span>
                        <span className="font-semibold">{applicantStats.selected}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full" 
                          style={{ width: `${(applicantStats.selected / applicantStats.total) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Rejected</span>
                        <span className="font-semibold">{applicantStats.rejected}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-red-500 h-2 rounded-full" 
                          style={{ width: `${(applicantStats.rejected / applicantStats.total) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-4">Quick Tasks</h2>
              <div className="space-y-4">
                <Button variant="outline" className="w-full justify-start">
                  <Plus className="mr-2 h-4 w-4" />
                  Post New Research Opening
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="mr-2 h-4 w-4" />
                  Review Pending Applications
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Manage Current Interns
                </Button>
              </div>
            </div>
          </div>
          
          {/* Research Openings */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Your Research Openings</h2>
              <Button variant="outline" size="sm">View All</Button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="py-3 px-4 text-left">Title</th>
                    <th className="py-3 px-4 text-left">Department</th>
                    <th className="py-3 px-4 text-left">Applicants</th>
                    <th className="py-3 px-4 text-left">Status</th>
                    <th className="py-3 px-4 text-left">Deadline</th>
                    <th className="py-3 px-4 text-left">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {openings.map((opening) => (
                    <tr key={opening.id}>
                      <td className="py-4 px-4">{opening.title}</td>
                      <td className="py-4 px-4">{opening.department}</td>
                      <td className="py-4 px-4">{opening.applicants}</td>
                      <td className="py-4 px-4">
                        <span className={`inline-block px-2 py-1 text-xs rounded ${
                          opening.status === "Open" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                        }`}>
                          {opening.status}
                        </span>
                      </td>
                      <td className="py-4 px-4">{opening.deadline}</td>
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
      </div>
      
      <Footer />
    </div>
  );
};

export default ProfessorDashboard;
