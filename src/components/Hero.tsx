import React from 'react';
import { HeroSection } from '../interfaces';
import useScrollToSection from '../hooks/useScrollToSection';

interface HeroProps {
	heroSection: HeroSection;
	onLanguageChange: (lang: 'en' | 'pl' | 'ru') => void;
}

const Hero: React.FC<HeroProps> = ({ heroSection: { hello, name, paragraphDescription, buttonDescription }, onLanguageChange }) => {
	const scrollToAboutSection = useScrollToSection('about');

	return (
		<div className='h-screen flex items-center justify-center bg-custom font-roboto-condensed'>
			<div className='flex flex-col items-center'>
				<p className='text-6xl font-medium uppercase text-center'>
					{hello} {name}
				</p>
				<p className='font-medium mt-3'>{paragraphDescription}</p>
				<div className='flex gap-2 m-8'>
					<button onClick={() => onLanguageChange('en')} className='heroBtn'>
						EN
					</button>
					<button onClick={() => onLanguageChange('pl')} className='heroBtn'>
						PL
					</button>
					<button onClick={() => onLanguageChange('ru')} className='heroBtn'>
						RU
					</button>
				</div>
				<button onClick={scrollToAboutSection} className='heroBtn mt-4'>
					{buttonDescription}
				</button>
			</div>
		</div>
	);
};

export default Hero;
