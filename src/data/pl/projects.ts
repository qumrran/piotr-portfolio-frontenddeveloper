import { Project } from "../../interfaces";
import WordrobeCutter from './../../assets/thumbnails/WardrobeCutter.jpg';

const projects: { header: string; items: Project[] } = {
  header: "MOJE PROJEKTY",
  items: [
    {
      id: 1,
      title: "Rozkrój Szafy",
      description: "Rozkrój Szafy to aplikacja internetowa dla stolarzy i hobbystów zajmujących się projektowaniem mebli na wymiar. Ułatwia obliczanie formatek szaf na podstawie wprowadzonych wymiarów i specyfikacji. Aplikacja oferuje także wizualizację oraz eksport do PDF, gotowy do użycia w warsztacie.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      imageUrl: WordrobeCutter,
      link: "https://qumrran.github.io/rozpis-mebli/",
      github: "https://github.com/qumrran/rozpis-mebli"
    },
    
    {
      id: 2,
      title: "NodeForge",
      description: "Projekt backendowy stworzony z użyciem Node.js i Express, demonstrujący umiejętności tworzenia API oraz integrację z MongoDB.",
      technologies: ["Node.js", "Express", "MongoDB"],
      imageUrl: "https://via.placeholder.com/400x300?text=NodeForge",
      link: "https://example.com/project2",
      github: "https://github.com/qumrran"
    },
    {
      id: 3,
      title: "FullStack Connect",
      description: "Aplikacja full-stack łącząca React i Node.js z integracją bazy danych PostgreSQL.",
      technologies: ["React", "Node.js", "PostgreSQL"],
      imageUrl: "https://via.placeholder.com/400x300?text=FullStack+Connect",
      link: "https://example.com/project3",
      github: "https://github.com/qumrran"
    },
    {
      id: 4,
      title: "ShopMaster",
      description: "Platforma e-commerce stworzona z użyciem TypeScript, React i Redux, kładąca nacisk na zarządzanie stanem i skalowalność.",
      technologies: ["TypeScript", "React", "Redux"],
      imageUrl: "https://via.placeholder.com/400x300?text=ShopMaster",
      link: "https://example.com/project4",
      github: "https://github.com/qumrran"
    },
    {
      id: 5,
      title: "MojePortfolio",
      description: "Osobista strona portfolio stworzona z użyciem Next.js i Tailwind CSS, prezentująca projekty, umiejętności i doświadczenie w programowaniu.",
      technologies: ["Next.js", "Tailwind CSS"],
      imageUrl: "https://via.placeholder.com/400x300?text=MyPortfolio",
      link: "https://example.com/project5",
      github: "https://github.com/qumrran"
    }
  ]
};

export default projects;
