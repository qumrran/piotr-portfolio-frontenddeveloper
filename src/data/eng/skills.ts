import { Technology } from '../../interfaces';
import { FaHtml5, FaCss3Alt, FaSass, FaJs, FaReact, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";

const skills: { header: string; technologies: Technology[] } = {
  header: "TECHNOLOGIES",
  technologies: [
    { id: 1, name: "HTML", icon: FaHtml5 },
    { id: 2, name: "CSS", icon: FaCss3Alt },
    { id: 3, name: "SCSS", icon: FaSass },
    { id: 4, name: "JavaScript", icon: FaJs },
    { id: 5, name: "TypeScript", icon: SiTypescript },
    { id: 6, name: "React", icon: FaReact },
    { id: 7, name: "Tailwind", icon: SiTailwindcss },
    { id: 8, name: "Figma", icon: FaFigma },
  ],
};

export default skills;
