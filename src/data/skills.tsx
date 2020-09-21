import { FiDatabase, FiMonitor, FiShield } from "react-icons/fi";

interface skillProps {
  title: string;
  icon: React.ReactElement;
  item: any;
  color?: string;
  background?: string;
}

export const skill: skillProps[] = [
  {
    title: "Front-End",
    icon: <FiMonitor />,
    item: ["ReactJS", "Javascript", "Typescript", "CSS/SCSS", "HTML"],
    color: "#fff",
    background: "#20639B",
  },
  {
    title: "Back-End",
    icon: <FiDatabase />,
    item: ["PHP", "Node.js", "MySQL"],
    color: "#fff",
    background: "#AC3B61",
  },
  {
    title: "Lainnya",
    icon: <FiShield />,
    item: ["Linux", "Git", "React Native (Basic)"],
    color: "#fff",
    background: "#03256C",
  },
];
