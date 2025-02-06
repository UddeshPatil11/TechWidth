import React from 'react';
import { Mail, MessageSquare, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Let's discuss how we can help your business grow
          </p>
        </div>

        <div className="mt-20 max-w-lg mx-auto">
          <form className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-200">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="mt-1 block w-full rounded-xl bg-white/10 border-transparent placeholder-gray-400 text-white focus:border-purple-500 focus:ring-purple-500"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-200">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-1 block w-full rounded-xl bg-white/10 border-transparent placeholder-gray-400 text-white focus:border-purple-500 focus:ring-purple-500"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-200">
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full rounded-xl bg-white/10 border-transparent placeholder-gray-400 text-white focus:border-purple-500 focus:ring-purple-500"
                placeholder="Tell us about your project"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-3 rounded-full hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300"
            >
              Send Message
            </button>
          </form>

          <div className="mt-12">
            <div className="grid grid-cols-2 gap-4">
              <a
                href="mailto:contact@techwidth.com"
                className="flex items-center justify-center px-4 py-3 border border-purple-400 text-base font-medium rounded-full text-purple-300 hover:bg-purple-900/50 transition-all duration-300"
              >
                <Mail className="h-5 w-5 mr-2" />
                Email Us
              </a>
              <a
                href="#"
                className="flex items-center justify-center px-4 py-3 border border-purple-400 text-base font-medium rounded-full text-purple-300 hover:bg-purple-900/50 transition-all duration-300"
              >
                <MessageSquare className="h-5 w-5 mr-2" />
                Live Chat
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;