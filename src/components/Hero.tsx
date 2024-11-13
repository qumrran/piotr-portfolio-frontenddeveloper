import React from 'react';
import { HeroSection } from '../interfaces'; 

interface HeroProps {
  heroSection: HeroSection;  
}

const Hero: React.FC<HeroProps> = ({ heroSection }) => {
  const scrollToSection = () => {
    const section = document.getElementById("about");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-custom">
      <div className="flex flex-col items-center">
        <p className="font-roboto-condensed text-6xl font-medium uppercase">
          {heroSection.hello} {heroSection.name}
        </p>
        <p className="font-roboto-condensed font-medium mt-2">
          {heroSection.paragraphDescription}
        </p>
        <button
          onClick={scrollToSection}
          className="font-roboto-condensed text-sm text-white p-2 mt-4 bg-black transition-colors duration-300 hover:bg-gray-700"
        >
          {heroSection.buttonDescription}
        </button>
      </div>
    </div>
  );
};

export default Hero;
