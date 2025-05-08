import React, { useEffect, useRef } from 'react';
import { bioData } from '../data/portfolioData';
import { ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subHeadingRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  // Simple entrance animation for hero elements
  useEffect(() => {
    const heading = headingRef.current;
    const subHeading = subHeadingRef.current;
    const cta = ctaRef.current;

    if (heading && subHeading && cta) {
      heading.style.opacity = '0';
      subHeading.style.opacity = '0';
      cta.style.opacity = '0';
      
      heading.style.transform = 'translateY(20px)';
      subHeading.style.transform = 'translateY(20px)';
      cta.style.transform = 'translateY(20px)';

      setTimeout(() => {
        heading.style.opacity = '1';
        heading.style.transform = 'translateY(0)';
        heading.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      }, 300);

      setTimeout(() => {
        subHeading.style.opacity = '1';
        subHeading.style.transform = 'translateY(0)';
        subHeading.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      }, 600);

      setTimeout(() => {
        cta.style.opacity = '1';
        cta.style.transform = 'translateY(0)';
        cta.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      }, 900);
    }
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h1 
          ref={headingRef}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
        >
          {bioData.name}
        </h1>
        <p 
          ref={subHeadingRef}
          className="text-xl sm:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-8"
        >
          {bioData.title}
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          {bioData.shortBio}
        </p>
        <div ref={ctaRef} className="flex flex-col items-center">
          <button 
            onClick={scrollToProjects}
            className="animate-bounce bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            aria-label="Scroll to projects"
          >
            <ArrowDown size={24} />
          </button>
          <span className="mt-4 text-sm text-gray-500 dark:text-gray-400">Explore My Work</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;