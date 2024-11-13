
import React from 'react';
import { Technology } from '../interfaces';

interface SkillsProps {
  skillsData: {
    header: string;
    technologies: Technology[];
  };
}

const Skills: React.FC<SkillsProps> = ({ skillsData }) => {
  return (
    <section id="skills" className="my-10 font-roboto-condensed">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-600">{skillsData.header}</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {skillsData.technologies.map((skill) => (
          <div key={skill.id} className="flex flex-col items-center ">
            <skill.icon className="text-5xl text-black mb-2" />
            <span className="text-lg  text-gray-600">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
