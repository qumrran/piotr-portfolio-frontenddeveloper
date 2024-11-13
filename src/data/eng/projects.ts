import { Project } from "../../interfaces";

const projects: { header: string; items: Project[] } = {
  header: "MY PROJECTS",
  items: [
    {
      id: 1,
      title: "Reactly",
      description: "A dynamic app built with React and CSS, showcasing advanced front-end capabilities.",
      technologies: ["React", "CSS"],
      imageUrl: "https://via.placeholder.com/400x300?text=Reactly",
      link: "https://example.com/project1",
      github: "https://github.com/qumrran"
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
