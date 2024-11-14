import React from 'react';
import portfolioImg from './../assets/images/piotr.jpg';
import { PersonalInfo } from '../interfaces';

const About: React.FC<PersonalInfo> = ({ name, greeting, aboutMeHeader, description }) => {
  return (
    <div id="about">
      <section className="flex items-center justify-center bg-gray-100 py-10 border-t-8 border-white">
        <div className="w-full max-w-screen-lg flex flex-col md:flex-row items-center justify-between px-6">
          
          <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <img 
              src={portfolioImg} 
              alt={`${name}'s picture`} 
              className="w-full max-w-xs md:max-w-sm"
            />
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left md:ml-6">
            <span className="font-roboto-condensed text-xl text-gray-600">
              {greeting} {name}
            </span>
            <h1 className="font-roboto-condensed text-3xl font-medium text-gray-700 py-3">
              {aboutMeHeader}
            </h1>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
