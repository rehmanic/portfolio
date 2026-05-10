import Bottom from "../components/Home/Bottom";
import Top from "../components/Home/Top";
import ProjectCard from "../components/ProjectCard";
import Dock from "@/components/Dock";
import useIsLaptopOrLarger from "../lib/useIsLaptopOrLarger";
import { useNavigate } from "react-router-dom";
import { NAV_ITEMS, SOCIAL_LINKS } from "../lib/constants";

const projects = [
  {
    title: "Specora",
    description:
      "An AI-assisted requirements engineering platform covering requirements elicitation, feasibility analysis, wireframing, specification, management.",
    tech: [
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "React JS", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
      { name: "Next JS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Node JS", logo: "https://nodejs.org/static/logos/jsIconGreen.svg" },
      { name: "Express JS", logo: "https://img.icons8.com/color/48/express-js.png" },
      { name: "FastAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    ],
    media: "/specora.png",
    links: {
      live: "#",
      github: "https://github.com/rehmanic/Specora",
      files: "#",
    },
  },
  {
    title: "GradWiz",
    description:
      "GradWiz is an app specifically developed for undergraduates to manage their assessments throughout the Semester. A single platform where they can manage their projects, assignments, quizzes, exams. It uses Firebase for authentication and data storage. Gmail, Drive and GCR APIs are used to streamline the workflow. ",
    tech: [
      {
        name: "React",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      },
      { name: "Firebase", logo: "/firebase.svg" },
    ],
    media: "/gradwiz.png",
    links: {
      live: "https://gradwiz.vercel.app",
      github: "https://github.com/rehmanic/GradWiz",
      files:
        "https://drive.google.com/drive/folders/14vIpN4kjbi8hcL9V8kzZJ0nPdOVCbpOV?usp=sharing",
    },
  },
];

export default function Projects() {
  const isLaptopOrLarger = useIsLaptopOrLarger();
  const navigate = useNavigate();

  const navItems = NAV_ITEMS.map((item) => ({
    icon: <item.icon size={18} />,
    label: item.label,
    onClick: () => navigate(item.path),
  }));

  const socialItems = SOCIAL_LINKS.map((item) => ({
    icon: <item.icon size={18} />,
    label: item.label,
    onClick: () => window.open(item.url, "_blank"),
  }));

  const items = [...navItems, ...socialItems];

  return (
    <section className="w-full h-auto bg-black flex flex-col items-center overflow-x-hidden relative">
      <Top />

      {/* Pass the projects array as a prop */}
      <ProjectCard projects={projects} />

      {/* Responsive Navigation */}
      {isLaptopOrLarger ? (
        <div className="fixed bottom-0 left-0 w-full flex justify-center z-50 pointer-events-none pb-4">
          <div className="pointer-events-auto">
            <Dock
              items={items}
              panelHeight={50}
              baseItemSize={30}
              magnification={70}
            />
          </div>
        </div>
      ) : (
        <Bottom />
      )}
    </section>
  );
}
