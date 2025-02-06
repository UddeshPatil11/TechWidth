import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent sm:text-4xl">
            About TechWidth
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 lg:mx-auto">
            Empowering businesses through innovative technology solutions
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Our Mission</h3>
              <p className="mt-4 text-lg text-gray-600">
                To deliver innovative and scalable technology solutions that empower businesses 
                to achieve their full potential in the digital age. We strive to be at the 
                forefront of technological advancement while maintaining the highest standards 
                of quality and client satisfaction.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Our Vision</h3>
              <p className="mt-4 text-lg text-gray-600">
                To be a global leader in technology solutions, recognized for our innovation, 
                reliability, and commitment to client success. We aim to shape the future of 
                digital transformation by creating solutions that make a lasting impact.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-8">Our Values</h3>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'Innovation',
                  description: 'Constantly pushing boundaries and embracing new technologies'
                },
                {
                  title: 'Excellence',
                  description: 'Delivering the highest quality in everything we do'
                },
                {
                  title: 'Integrity',
                  description: 'Building trust through honest and ethical practices'
                }
              ].map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <h4 className="text-xl font-semibold text-gray-900">{value.title}</h4>
                  <p className="mt-2 text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;