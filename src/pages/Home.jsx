import React, { Suspense } from 'react';
const Spline = React.lazy(() => import('@splinetool/react-spline'));
import Top from "../components/Home/Top";
import Bottom from "../components/Home/Bottom";
import TextPressure from "../components/Text/TextPressure";
import Dock from "@/components/Dock";
import useIsLaptopOrLarger from "../lib/useIsLaptopOrLarger";
import { useNavigate } from "react-router-dom";
import { NAV_ITEMS, SOCIAL_LINKS } from "../lib/constants";

export default function Home() {
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
    <section className="w-screen h-screen bg-black flex flex-col md:flex-row justify-center items-center relative">
      {/* Intro Section */}
      <div
        id="intro"
        className="w-full md:w-[50%] flex flex-col justify-center items-center px-4 md:px-0"
      >
        <div className="w-full md:w-[75%] flex flex-col text-center md:text-left gap-y-4 md:gap-y-6">
          <div className="relative h-[130px] md:h-[230px]">
            <TextPressure
              text="Abdur"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="#ffffff"
              strokeColor="#ff0000"
              minFontSize={18} // smaller for mobile, can override with md:prop in custom TextPressure upgrade
              className="md:text-[2.25rem]"
            />
          </div>
          <div className="relative h-[130px] md:h-[230px]">
            <TextPressure
              text="Rehman"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="#ffffff"
              strokeColor="#ff0000"
              minFontSize={18}
              className="md:text-[2.25rem]"
            />
          </div>
          {/* Job titles in a static card */}
          <div className="w-full flex justify-center mt-4">
            <div className="rounded-2xl shadow-lg bg-gradient-to-br from-neutral-900 to-black px-2 py-2 md:px-6 md:py-3 flex flex-row items-center justify-center min-w-[180px] max-w-xs md:max-w-sm text-white font-semibold gap-x-3">
              <span className="block text-xs md:text-sm xl:text-base whitespace-nowrap">Software Engineer</span>
              <span className="w-[1px] h-5 md:h-6 bg-neutral-600 mx-2 rounded" />
              <span className="block text-xs md:text-sm xl:text-base whitespace-nowrap">Full Stack Web Developer</span>
            </div>
          </div>
        </div>
      </div>

      {/* Spline 3D Model */}
      <div className="w-full md:w-[50%] h-[50%] md:h-full flex justify-center items-center relative hidden md:flex">
        <Suspense fallback={<div className="w-full h-full bg-black animate-pulse flex items-center justify-center text-neutral-800">Loading 3D Scene...</div>}>
          <Spline
            scene="https://prod.spline.design/UgiBiSGLOhQqrvaP/scene.splinecode"
            className="w-full h-full"
          />
        </Suspense>
        <div className="absolute bottom-0 right-0 w-40 h-16 bg-black"></div>
      </div>

      {/* Top Navbar */}
      <Top />

      {/* Responsive Navigation */}
      {isLaptopOrLarger ? (
        <Dock
          items={items}
          panelHeight={50}
          baseItemSize={30}
          magnification={70}
        />
      ) : (
        <Bottom />
      )}
    </section>
  );
}
