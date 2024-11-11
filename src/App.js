import React from 'react';
import projectData from './data/projectData';
import About from './components/About';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Hero name={projectData.name} />  
      <About about={projectData.personalInfo} /> 
      <Skills technologies={projectData.technologies} />
      <Projects projects={projectData.projects} />
      <Footer contact={projectData.contact} />
    </>
  );
}

export default App;
