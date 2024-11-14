import React from 'react';
import { ProjectsProps } from '../interfaces';

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section className="py-20 bg-gray-100 font-roboto-condensed">
      <h2 className="text-center text-3xl font-bold mb-8 text-gray-600">
        {projects.header}
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {projects.items.map(({ id, title, description, technologies, imageUrl, link, github }) => (
          <div key={id} className="bg-white shadow-lg p-6 max-w-xs text-center">
            <img src={imageUrl} alt={title} className="w-full h-40 object-cover mb-4" />
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <div className="text-gray-600 mb-4 max-h-24 overflow-y-auto">
              <p>{description}</p>
            </div>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {technologies.map((tech, index) => (
                <span key={index} className="text-sm text-white bg-black px-2 py-1">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-around mt-4">
              <a href={link} target="_blank" rel="noopener noreferrer" className="text-gray-700 underline">
                Live Demo
              </a>
              <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-700 underline">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
