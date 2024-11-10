
import { FaHtml5, FaCss3Alt, FaSass, FaJs, FaReact, FaNodeJs, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";


const projectData = {
    name: "Piotr",
    description: "I am a front-end developer specializing in building dynamic, responsive web applications using React. With a strong background in JavaScript and modern ES6+ standards, I create efficient, scalable, and user-friendly front-end solutions.I place great emphasis on aesthetics and usability, frequently utilizing Tailwind CSS and SCSS to streamline styling processes and design components that align with project visions. My experience with component-based design principles allows me to build modular, maintainable codebases. Dedicated to continuous learning, I stay up-to-date with new libraries and best practices in development. I value attention to detail and strive to ensure that each project combines functionality with polished design, delivering an exceptional user experience.",
    technologies: [
        {
            id: 1,
            name: "HTML",
            icon: FaHtml5,
          },
          {
            id: 2,
            name: "CSS",
            icon: FaCss3Alt,
          },
          {
            id: 3,
            name: "SCSS",
            icon: FaSass,
          },
          {
            id: 4,
            name: "JavaScript",
            icon: FaJs,
          },
          {
            id: 5,
            name: "TypeScript",
            icon: SiTypescript,
          },
          {
            id: 6,
            name: "React",
            icon: FaReact,
          },
          {
            id: 7,
            name: "Tailwind",
            icon: SiTailwindcss,
          },
          {
            id: 8,
            name: "Figma",
            icon: FaFigma,
          },
    ],
  
    projects: [
        {
            id: 1,
            title: "Reactly",
            description: "A dynamic application built using React and CSS, showcasing advanced front-end capabilities.",
            technologies: ["React", "CSS"],
            imageUrl: "https://via.placeholder.com/400x300?text=Reactly",
            link: "https://example.com/project1",
            github: "https://github.com/qumrran"
        },
        {
            id: 2,
            title: "NodeForge",
            description: "A backend project built with Node.js and Express, demonstrating solid skills in API creation and MongoDB database management.",
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
            description: "An e-commerce platform built with TypeScript, React, and Redux, focusing on state management and scalability. ",
            technologies: ["TypeScript", "React", "Redux"],
            imageUrl: "https://via.placeholder.com/400x300?text=ShopMaster",
            link: "https://example.com/project4",
            github: "https://github.com/qumrran"
        },
        {
            id: 5,
            title: "MyPortfolio",
            description: "A personal portfolio website created with Next.js and Tailwind CSS, showcasing projects, skills, and development experience. ",
            technologies: ["Next.js", "Tailwind CSS"],
            imageUrl: "https://via.placeholder.com/400x300?text=MyPortfolio",
            link: "https://example.com/project5",
            github: "https://github.com/qumrran"
        }
    ]
    
    
  };

  export default projectData;
  