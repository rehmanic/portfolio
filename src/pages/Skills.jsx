import React from 'react';
import { motion } from 'motion/react';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  GitBranch, 
  Cloud
} from "lucide-react";
import Bottom from "../components/Home/Bottom";
import Top from "../components/Home/Top";
import Dock from "@/components/Dock";
import useIsLaptopOrLarger from "../lib/useIsLaptopOrLarger";
import { useNavigate } from "react-router-dom";
import { NAV_ITEMS, SOCIAL_LINKS } from "../lib/constants";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    color: "from-neutral-500/10 to-neutral-500/5",
    skills: ["C++", "JavaScript", "TypeScript", "Python"]
  },
  {
    title: "Frontend",
    icon: Layout,
    color: "from-neutral-500/10 to-neutral-500/5",
    skills: ["HTML", "CSS", "JS", "React JS", "Next JS", "Vue JS"]
  },
  {
    title: "Backend",
    icon: Server,
    color: "from-neutral-500/10 to-neutral-500/5",
    skills: ["Node JS", "Express JS", "Nest JS", "FastAPI", "Firebase"]
  },
  {
    title: "Databases",
    icon: Database,
    color: "from-neutral-500/10 to-neutral-500/5",
    skills: ["MongoDB", "PostgreSQL"]
  },
  {
    title: "Version Control",
    icon: GitBranch,
    color: "from-neutral-500/10 to-neutral-500/5",
    skills: ["Git", "GitHub"]
  },
  {
    title: "DevOps",
    icon: Cloud,
    color: "from-neutral-500/10 to-neutral-500/5",
    skills: ["Linux", "GitHub Actions", "Docker", "Docker Hub", "Kubernetes", "Vercel", "AWS"]
  }
];

const SkillCard = ({ category, index }) => {
  const Icon = category.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative group p-6 rounded-2xl border border-white/5 bg-gradient-to-br ${category.color} backdrop-blur-2xl overflow-hidden hover:border-white/10 transition-all duration-500`}
    >
      <div className="absolute -right-4 -top-4 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-500">
        <Icon size={120} />
      </div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors">
            <Icon className="text-white/70 group-hover:text-white transition-colors" size={24} />
          </div>
          <h3 className="text-xl font-bold text-white/80 group-hover:text-white tracking-tight transition-colors">{category.title}</h3>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.05 }}
              className="px-3 py-1 text-sm font-medium text-white/60 bg-white/5 border border-white/5 rounded-full hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
      
      {/* Animated glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
    </motion.div>
  );
};

import TextPressure from "../components/Text/TextPressure";

export default function Skills() {
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
    <section className="w-full min-h-screen bg-black flex flex-col relative overflow-x-hidden">
      <Top />
      
      <div className="flex-1 flex flex-col items-center justify-center pt-24 pb-32 px-6 md:px-12">
        <div className="w-full max-w-3xl mx-auto mb-12 md:mb-20">
          <div className="relative h-[100px] md:h-[180px]">
            <TextPressure
              text="Tech Stack"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="#ffffff"
              minFontSize={24}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {skillCategories.map((cat, idx) => (
            <SkillCard key={idx} category={cat} index={idx} />
          ))}
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

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
