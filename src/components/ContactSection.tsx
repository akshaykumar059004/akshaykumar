import React from 'react';
import { socialLinks } from '../data/portfolioData';
import * as LucideIcons from 'lucide-react';

const ContactSection: React.FC = () => {
  // Dynamically get the icon from Lucide based on the name
  const getIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName] || LucideIcons.Link;
    return <IconComponent size={20} />;
  };

  return (
    <section 
      id="contact" 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Get in Touch
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Have a question or want to collaborate? Feel free to reach out through any of the channels below.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg shadow-sm transition-colors duration-300 text-gray-700 dark:text-gray-300"
            >
              {getIcon(link.icon)}
              <span>{link.name}</span>
            </a>
          ))}
        </div>
        
        <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} | All Rights Reserved
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;