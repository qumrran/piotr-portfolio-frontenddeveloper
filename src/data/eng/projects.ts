import { Project } from "../../interfaces";
import WordrobeCutter from './../../assets/thumbnails/WardrobeCutter.jpg';

const projects: { header: string; items: Project[] } = {
  header: "MY PROJECTS",
  items: [
    {
      id: 1,
      title: "Wardrobe Cutter",
      description: "Wardrobe Cutter is a web app for woodworkers and hobbyists creating custom furniture. It simplifies calculating cut pieces for wardrobes based on user-provided dimensions and specifications. The app also offers visualization and PDF export for workshop-ready results.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      imageUrl: WordrobeCutter,
      link: "https://qumrran.github.io/rozpis-mebli/",
      github: "https://github.com/qumrran/rozpis-mebli"
    },
    {
      id: 2,
      title: "NodeForge",
      description: "A backend project built with Node.js and Express, showcasing API development skills and MongoDB integration.",
      technologies: ["Node.js", "Express", "MongoDB"],
      imageUrl: "https://via.placeholder.com/400x300?text=NodeForge",
      link: "https://example.com/project2",
      github: "https://github.com/qumrran"
    },
    {
      id: 3,
      title: "FullStack Connect",
      description: "A full-stack application combining React and Node.js with PostgreSQL database integration.",
      technologies: ["React", "Node.js", "PostgreSQL"],
      imageUrl: "https://via.placeholder.com/400x300?text=FullStack+Connect",
      link: "https://example.com/project3",
      github: "https://github.com/qumrran"
    },
    {
      id: 4,
      title: "ShopMaster",
      description: "An e-commerce platform built with TypeScript, React, and Redux, focusing on state management and scalability.",
      technologies: ["TypeScript", "React", "Redux"],
      imageUrl: "https://via.placeholder.com/400x300?text=ShopMaster",
      link: "https://example.com/project4",
      github: "https://github.com/qumrran"
    },
    {
      id: 5,
      title: "MyPortfolio",
      description: "A personal portfolio website built with Next.js and Tailwind CSS, showcasing projects, skills, and development experience.",
      technologies: ["Next.js", "Tailwind CSS"],
      imageUrl: "https://via.placeholder.com/400x300?text=MyPortfolio",
      link: "https://example.com/project5",
      github: "https://github.com/qumrran"
    }
  ]
};

export default projects;
