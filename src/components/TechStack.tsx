import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import {
  Brain,
  Code2,
  Database,
  Globe,
  Server,
  ShoppingBag,
  Store,
  Cpu,
  Layers,
  Box,
  Cloud
} from 'lucide-react';

const technologies = [
  { name: 'React', icon: <Code2 className="h-10 w-10" />, color: 'text-blue-500' },
  { name: 'TypeScript', icon: <Code2 className="h-10 w-10" />, color: 'text-blue-600' },
  { name: 'Node.js', icon: <Server className="h-10 w-10" />, color: 'text-green-600' },
  { name: 'Next.js', icon: <Globe className="h-10 w-10" />, color: 'text-gray-800' },
  { name: 'AI/ML', icon: <Brain className="h-10 w-10" />, color: 'text-purple-600' },
  { name: 'Java', icon: <Cpu className="h-10 w-10" />, color: 'text-red-600' },
  { name: 'Shopify', icon: <ShoppingBag className="h-10 w-10" />, color: 'text-green-500' },
  { name: 'Wix', icon: <Globe className="h-10 w-10" />, color: 'text-blue-400' },
  { name: 'MongoDB', icon: <Database className="h-10 w-10" />, color: 'text-green-500' },
  { name: 'PostgreSQL', icon: <Database className="h-10 w-10" />, color: 'text-blue-600' },
  { name: 'Docker', icon: <Box className="h-10 w-10" />, color: 'text-blue-500' },
  { name: 'AWS', icon: <Cloud className="h-10 w-10" />, color: 'text-orange-500' },
];

const TechStack = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Technologies We Master
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Cutting-edge technologies for modern solutions
          </p>
        </div>

        <div className="mt-16">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 6,
              },
            }}
            className="tech-stack-swiper"
          >
            {technologies.map((tech, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className={`${tech.color}`}>
                    {tech.icon}
                  </div>
                  <span className="mt-4 font-medium text-gray-900">{tech.name}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TechStack;