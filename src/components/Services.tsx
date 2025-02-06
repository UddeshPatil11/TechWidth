import React from 'react';
import { Monitor, Smartphone, Brain, Cloud, ShoppingCart, Store, Globe } from 'lucide-react';

const services = [
  {
    icon: <Monitor className="h-8 w-8" />,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies for optimal performance and scalability.'
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.'
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: 'AI & ML Solutions',
    description: 'Intelligent solutions powered by advanced machine learning algorithms and artificial intelligence.'
  },
  {
    icon: <Cloud className="h-8 w-8" />,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and solutions for modern business needs.'
  },
  {
    icon: <Store className="h-8 w-8" />,
    title: 'Shopify Development',
    description: 'Custom Shopify solutions, themes, and apps to enhance your e-commerce business.'
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: 'Wix Development',
    description: 'Professional Wix websites with custom functionality and integrations.'
  },
  {
    icon: <ShoppingCart className="h-8 w-8" />,
    title: 'E-commerce Development',
    description: 'Custom e-commerce solutions that drive sales and improve customer experience.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Comprehensive technology solutions to help your business grow
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                <span className="rounded-lg inline-flex p-3 bg-blue-50 text-blue-600 ring-4 ring-blue-50">
                  {service.icon}
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900">
                  <a href="#" className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {service.title}
                  </a>
                </h3>
                <p className="mt-2 text-gray-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;