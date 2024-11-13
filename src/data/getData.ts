import enContact from './eng/contact';
import enPersonalInfo from './eng/personalInfo';
import enProjects from './eng/projects';
import enSkills from './eng/skills';
import enHeroSection from './eng/heroSection';

import plContact from './pl/contact';
import plPersonalInfo from './pl/personalInfo';
import plProjects from './pl/projects';
import plSkills from './pl/skills';
import plHeroSection from './pl/heroSection';

import ruContact from './ru/contact';
import ruPersonalInfo from './ru/personalInfo';
import ruProjects from './ru/projects';
import ruSkills from './ru/skills';
import ruHeroSection from './ru/heroSection';

export const getData = (language: 'en' | 'pl' | 'ru') => {
  switch (language) {
    case 'pl':
      return {
        contact: plContact,
        personalInfo: plPersonalInfo,
        projects: plProjects,
        skills: plSkills,
        heroSection: plHeroSection,
      };
    case 'ru':
      return {
        contact: ruContact,
        personalInfo: ruPersonalInfo,
        projects: ruProjects,
        skills: ruSkills,
        heroSection: ruHeroSection,
      };
    default:
      return {
        contact: enContact,
        personalInfo: enPersonalInfo,
        projects: enProjects,
        skills: enSkills,
        heroSection: enHeroSection,
      };
  }
};
