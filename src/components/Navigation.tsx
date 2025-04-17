
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, BookOpen, User } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <BookOpen className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold text-primary font-display">Labmates</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-neutral hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/for-professors" className="text-neutral hover:text-primary transition-colors">
            For Professors
          </Link>
          <Link to="/for-students" className="text-neutral hover:text-primary transition-colors">
            For Students
          </Link>
          <Link to="/about" className="text-neutral hover:text-primary transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-neutral hover:text-primary transition-colors">
            Contact
          </Link>
        </div>

        {/* Auth Buttons - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/signin">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
          </Link>
          <Link to="/signup">
            <Button size="sm">Sign Up</Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-neutral-dark"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md z-50 animate-fade-in">
          <div className="container mx-auto py-4 px-6 flex flex-col space-y-4">
            <Link
              to="/"
              className="text-neutral-dark hover:text-primary py-2 transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/for-professors"
              className="text-neutral-dark hover:text-primary py-2 transition-colors"
              onClick={toggleMenu}
            >
              For Professors
            </Link>
            <Link
              to="/for-students"
              className="text-neutral-dark hover:text-primary py-2 transition-colors"
              onClick={toggleMenu}
            >
              For Students
            </Link>
            <Link
              to="/about"
              className="text-neutral-dark hover:text-primary py-2 transition-colors"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-neutral-dark hover:text-primary py-2 transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <div className="flex flex-col space-y-3 pt-4">
              <Link to="/signin" onClick={toggleMenu}>
                <Button variant="outline" className="w-full">
                  Sign In
                </Button>
              </Link>
              <Link to="/signup" onClick={toggleMenu}>
                <Button className="w-full">Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
