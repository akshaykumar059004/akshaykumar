import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/portfolioData';

const ProjectsSection: React.FC = () => {
  return (
    <section 
      id="projects" 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Projects & Research
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            A collection of my work in machine learning, backend and neural networks.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;