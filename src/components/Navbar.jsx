
import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu when route changes or on larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl md:text-3xl font-bold font-playfair">
            <span className={`transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}>
              Skyra Events
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => `text-sm uppercase tracking-wider font-medium hover:text-primary ${
                scrolled 
                  ? (isActive ? 'text-primary' : 'text-gray-800') 
                  : (isActive ? 'text-primary' : 'text-white')
              }`}
            >
              Home
            </NavLink>
            <NavLink 
              to="/services" 
              className={({ isActive }) => `text-sm uppercase tracking-wider font-medium hover:text-primary ${
                scrolled 
                  ? (isActive ? 'text-primary' : 'text-gray-800') 
                  : (isActive ? 'text-primary' : 'text-white')
              }`}
            >
              Services
            </NavLink>
            <NavLink 
              to="/about-us" 
              className={({ isActive }) => `text-sm uppercase tracking-wider font-medium hover:text-primary ${
                scrolled 
                  ? (isActive ? 'text-primary' : 'text-gray-800') 
                  : (isActive ? 'text-primary' : 'text-white')
              }`}
            >
              About Us
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => `text-sm uppercase tracking-wider font-medium hover:text-primary ${
                scrolled 
                  ? (isActive ? 'text-primary' : 'text-gray-800') 
                  : (isActive ? 'text-primary' : 'text-white')
              }`}
            >
              Contact
            </NavLink>
            <Link 
              to="/contact"
              className={`btn-primary py-2 px-4 text-sm ${
                !scrolled && 'hover:bg-white hover:text-primary'
              }`}
            >
              Book Now
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg 
              className={`h-6 w-6 ${scrolled ? 'text-gray-800' : 'text-white'}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden bg-white shadow-lg transition-all duration-300 overflow-hidden ${
        mobileMenuOpen ? 'max-h-64' : 'max-h-0'
      }`}>
        <div className="container mx-auto px-4 py-2">
          <nav className="flex flex-col space-y-4 py-4">
            <NavLink 
              to="/" 
              className={({ isActive }) => `text-sm uppercase tracking-wider font-medium hover:text-primary ${isActive ? 'text-primary' : 'text-gray-800'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/services" 
              className={({ isActive }) => `text-sm uppercase tracking-wider font-medium hover:text-primary ${isActive ? 'text-primary' : 'text-gray-800'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </NavLink>
            <NavLink 
              to="/about-us" 
              className={({ isActive }) => `text-sm uppercase tracking-wider font-medium hover:text-primary ${isActive ? 'text-primary' : 'text-gray-800'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => `text-sm uppercase tracking-wider font-medium hover:text-primary ${isActive ? 'text-primary' : 'text-gray-800'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </NavLink>
            <Link 
              to="/contact"
              className="btn-primary py-2 px-4 text-sm text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Now
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
