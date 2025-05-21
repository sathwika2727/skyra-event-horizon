
import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-skyra-purple text-white flex items-center justify-center font-playfair text-2xl font-bold">Sv</div>
            <div className="ml-2 text-xl font-playfair font-bold text-gray-800">Skyra Events</div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-1">
            <NavLink to="/" className={({ isActive }) => 
              `nav-link ${isActive ? 'active' : ''}`
            }>
              Home
            </NavLink>
            <NavLink to="/services" className={({ isActive }) => 
              `nav-link ${isActive ? 'active' : ''}`
            }>
              Services
            </NavLink>
            <NavLink to="/about-us" className={({ isActive }) => 
              `nav-link ${isActive ? 'active' : ''}`
            }>
              About Us
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => 
              `nav-link ${isActive || location.pathname.includes('contact') ? 'active' : ''}`
            }>
              Contact
            </NavLink>
            <Link to="/contact" className="btn-primary ml-4">
              Book Your Event
            </Link>
          </div>
          
          <button className="md:hidden" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="flex flex-col px-4 py-4 space-y-2 border-t">
            <NavLink 
              to="/" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/services" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </NavLink>
            <NavLink 
              to="/about-us" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </NavLink>
            <Link 
              to="/contact" 
              className="btn-primary text-center mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Your Event
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
