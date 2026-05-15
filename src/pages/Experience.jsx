import Bottom from "../components/Home/Bottom";
import Top from "../components/Home/Top";
import Dock from "@/components/Dock";
import useIsLaptopOrLarger from "../lib/useIsLaptopOrLarger";
import { useNavigate } from "react-router-dom";
import { NAV_ITEMS, SOCIAL_LINKS } from "../lib/constants";

export default function Experience() {
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

  const experiences = [
    {
      title: "Associate Software Engineer",
      company: "VisionRD, NSTP, NUST, Islamabad",
      year: "2026",
      duration: "26 Mar 2026 – 08 May 2026",
      logo: "/vrd.jpeg",
      details: [
        "Designed and developed Entitlement Management System",
        "Connected it to all products for subscription management, stripe payments and usage analytics"
      ]
    },
    {
      title: "Web Development Intern",
      company: "Bookme, NASTP, Lahore",
      year: "2025",
      duration: "19 Jun 2025 – 15 Aug 2025",
      logo: "/bookme_logo.png",
      details: [
        "Contributed to the Back Office App as a frontend developer",
        "Designed and developed features using Nuxt.js framework"
      ]
    },
  ];

  return (
    <section className="w-screen h-screen bg-black flex flex-col md:flex-row relative">
      <Top />

      <div className="flex flex-1 items-center justify-center overflow-y-auto pt-20 pb-10">
        <div className="max-w-2xl w-full px-4">
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-1 gap-6">
              {experiences.map((exp, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0 flex items-center justify-center bg-white/10 rounded-lg p-2 w-20 h-20 md:w-24 md:h-24">
                      <img 
                        src={exp.logo} 
                        alt={`${exp.company} Logo`} 
                        className="w-full h-full object-contain" 
                      />
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold text-indigo-200">
                          {exp.title}
                        </h3>
                        <span className="px-2 py-0.5 text-xs font-bold bg-white rounded text-black uppercase">
                          {exp.year}
                        </span>
                      </div>
                      <p className="text-indigo-100/90 font-medium mb-1">{exp.company}</p>
                      <p className="text-xs text-white/60 mb-4 tracking-wide uppercase">{exp.duration}</p>
                      <ul className="space-y-2">
                        {exp.details.map((detail, i) => (
                          <li key={i} className="text-white/80 text-sm flex items-start gap-2">
                            <span className="text-indigo-400 mt-1">•</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
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
