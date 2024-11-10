import React from 'react';
import projectData from './data/projectData';
import About from './components/About';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
   <>
     <Hero name={projectData.name}/>
     <About about={projectData}/>
     <Skills technologies={projectData.technologies}/>
     <Projects projects={projectData.projects} />
   </>
  );
}

export default App;
