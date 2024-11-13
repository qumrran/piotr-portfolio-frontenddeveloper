import React, { useState } from 'react';
import { getData } from './data/getData';
import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  const [language, setLanguage] = useState<'en' | 'pl' | 'ru'>('en');
  const data = getData(language);

  return (
    <div className="App">
      <div>
        <button onClick={() => setLanguage('en')}>EN</button>
        <button onClick={() => setLanguage('pl')}>PL</button>
        <button onClick={() => setLanguage('ru')}>RU</button>
      </div>

      <Hero heroSection={data.heroSection} />
      <About 
          name={data.personalInfo.name}
          description={data.personalInfo.description}
          greeting={data.personalInfo.greeting}
          aboutMeHeader={data.personalInfo.aboutMeHeader}
      />
      <Skills skillsData={data.skills} />
      <Projects projects={data.projects} />
      <Footer contact={data.contact} />
    </div>
  );
}

export default App;
