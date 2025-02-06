import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-900 to-blue-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-white text-lg font-semibold">TechWidth</h3>
            <p className="mt-4 text-gray-300">
              Innovative software solutions for modern businesses. We help companies 
              transform their digital presence and achieve their goals.
            </p>
            <div className="mt-4 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider">Services</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Web Development</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Mobile Apps</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">AI & ML Solutions</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Cloud Solutions</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} TechWidth. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;