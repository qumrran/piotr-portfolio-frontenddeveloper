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

	const handleLanguageChange = (lang: 'en' | 'pl' | 'ru') => {
		setLanguage(lang);
	};

	return (
		<div className='App'>
			<Hero
				heroSection={data.heroSection}
				onLanguageChange={handleLanguageChange}
			/>
			<About
				name={data.personalInfo.name}
				description={data.personalInfo.description}
				greeting={data.personalInfo.greeting}
				aboutMeHeader={data.personalInfo.aboutMeHeader}
				button={data.personalInfo.button}
			/>

			<Skills skillsData={data.skills} />
			<Projects projects={data.projects} />
			<Footer contact={data.contact} />
		</div>
	);
}

export default App;
