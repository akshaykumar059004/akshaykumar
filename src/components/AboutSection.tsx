import React from 'react';
import { bioData } from '../data/portfolioData';

const AboutSection: React.FC = () => {
  return (
    <section 
      id="about" 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/3">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {bioData.longBio.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/3">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Experience
            </h3>
            <div className="space-y-8">
              {bioData.experience.map((exp, index) => (
                <div key={index} className="border-l-2 border-blue-500 pl-4">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    {exp.title}
                  </h4>
                  <p className="text-sm text-blue-600 dark:text-blue-400 mb-1">
                    {exp.company} | {exp.period}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;