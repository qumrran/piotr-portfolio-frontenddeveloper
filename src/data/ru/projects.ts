import { Project } from "../../interfaces";

const projects: { header: string; items: Project[] } = {
  header: "МОИ ПРОЕКТЫ",
  items: [
    {
      id: 1,
      title: "Reactly",
      description: "Динамичное приложение, созданное с использованием React и CSS, демонстрирующее передовые возможности фронтенда.",
      technologies: ["React", "CSS"],
      imageUrl: "https://via.placeholder.com/400x300?text=Reactly",
      link: "https://example.com/project1",
      github: "https://github.com/qumrran"
    },
    {
      id: 2,
      title: "NodeForge",
      description: "Бэкэнд-проект, созданный с использованием Node.js и Express, демонстрирующий навыки разработки API и работы с MongoDB.",
      technologies: ["Node.js", "Express", "MongoDB"],
      imageUrl: "https://via.placeholder.com/400x300?text=NodeForge",
      link: "https://example.com/project2",
      github: "https://github.com/qumrran"
    },
    {
      id: 3,
      title: "FullStack Connect",
      description: "Full-stack приложение, которое сочетает React и Node.js с интеграцией базы данных PostgreSQL.",
      technologies: ["React", "Node.js", "PostgreSQL"],
      imageUrl: "https://via.placeholder.com/400x300?text=FullStack+Connect",
      link: "https://example.com/project3",
      github: "https://github.com/qumrran"
    },
    {
      id: 4,
      title: "ShopMaster",
      description: "Платформа для электронной коммерции, созданная с использованием TypeScript, React и Redux, с акцентом на управление состоянием и масштабируемость.",
      technologies: ["TypeScript", "React", "Redux"],
      imageUrl: "https://via.placeholder.com/400x300?text=ShopMaster",
      link: "https://example.com/project4",
      github: "https://github.com/qumrran"
    },
    {
      id: 5,
      title: "МоёПортфолио",
      description: "Персональный сайт-портфолио, созданный с использованием Next.js и Tailwind CSS, демонстрирующий проекты, навыки и опыт разработки.",
      technologies: ["Next.js", "Tailwind CSS"],
      imageUrl: "https://via.placeholder.com/400x300?text=MyPortfolio",
      link: "https://example.com/project5",
      github: "https://github.com/qumrran"
    }
  ]
};

export default projects;
