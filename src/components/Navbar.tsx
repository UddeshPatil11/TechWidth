import React, { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-900 to-blue-900 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Code2 className="h-8 w-8 text-purple-300" />
            <span className="ml-2 text-xl font-bold text-white">TechWidth</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#portfolio" className="text-gray-300 hover:text-white transition-colors">Portfolio</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            <button className="bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-400 transition-colors">
              Get Started
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-purple-900 to-blue-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#services" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">Services</a>
            <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#portfolio" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">Portfolio</a>
            <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">Contact</a>
            <button className="w-full mt-2 bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-400 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;