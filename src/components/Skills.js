import React from 'react';

function Skills({ technologies }) {
  return (
    <div className="flex flex-col items-center">
      <h2 className="font-roboto-condensed text-4xl font-medium text-gray-600 py-6">TECHNOLOGIES</h2> 
      <div className="flex flex-wrap justify-center gap-6 p-4">
        {technologies.map((tech) => (
          <div key={tech.id} className="flex flex-col items-center text-center">
            <tech.icon className="text-5xl text-black-500 mb-2" /> 
            <span className="font-roboto-condensed text-gray-600">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;

