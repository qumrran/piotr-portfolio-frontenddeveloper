import { IconType } from "react-icons";

export interface HeroSection {
    name: string;
    hello: string;
    paragraphDescription: string;
    buttonDescription: string;
}

export interface PersonalInfo {
    name: string;
    greeting: string;
    aboutMeHeader: string;
    description: string;
  }

export interface Technology {
    id: number;
    name: string;
    icon: IconType;
}

export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    link: string;
    github: string;
}

export interface Contact {
    id: number;
    name: string;
    url: string;
    icon: IconType;
}