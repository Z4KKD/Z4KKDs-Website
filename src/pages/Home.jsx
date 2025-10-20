// src/pages/Home.jsx
import React from "react";
import Navbar from "../components/Navbar";
import HeroInteractive from "../components/HeroInteractive";
import SkillsInteractive from "../components/SkillsInteractive";
import ProjectsCarousel from "../components/ProjectsCarousel";
import ExperienceAccordion from "../components/ExperienceAccordion";
import Footer from "../components/Footer";
import ParticlesBackground from "../components/ParticlesBackground";

// Assets (keep your existing asset filenames)
import heroImg from "../assets/Z4KKD.gif";
import myself from "../assets/Myself.jpg";
import project1 from "../assets/ZakksForms.png";
import project2 from "../assets/IDVT.png";
import project3 from "../assets/UglyDuckies.png";
import game3 from "../assets/game3.png";
import game4 from "../assets/game4.png";

const Home = () => {
  const projects = [
    {
      img: project1,
      title: "AI-Powered Form Builder",
      description:
        "Full-stack web app with AI summaries, JWT auth, and export tools.",
      links: [
        { label: "Live Site", url: "https://zakksforms.netlify.app/" },
        { label: "Open Source", url: "https://github.com/Z4KKD/ZakksForms-Open-Source" },
      ],
    },
    {
      img: project2,
      title: "Data Visualization Tool",
      description:
        "React + Flask, Upload CSV/Excel, build charts, real-time filtering (D3.js).",
      links: [
        { label: "Live Site", url: "https://uglyduckies.netlify.app/" }, 
        { label: "Open Source", url: "https://github.com/Z4KKD/Data-visualization-tool" },
      ],
    },
    {
      img: project3,
      title: "Ugly Duckies Guild Website",
      description:
        "A responsive React application with dynamic animations, structured guild data, recruiter profiles, and custom CSS-driven motion design.",
      links: [
        { label: "Live Site", url: "https://uglyduckies.netlify.app/" }, 
        { label: "Open Source", url: "https://github.com/Z4KKD/UglyDuckies-Guild-Website" },
      ],
    },
    {
      img: game4,
      title: "Terminal Hero",
      description: "A browser-based text RPG with dungeon exploration, strategic combat, crafting, mini-games, and an interactive inventory system.",
      link: "https://z4kkd.itch.io/terminalhero",
    },
    {
      img: game3,
      title: "Downhill Hurts",
      description: "Downhill snowboarding survival game.",
      link: "https://z4kkd.itch.io/downhill-hurts",
    },
  ];

  return (
    <>
      <Navbar />
      <main id="app-canvas">
        <HeroInteractive
          title="Zachary Duncan"
          subtitle="(Zakk)"
          description="Full-Stack Software Engineer — React / .NET / FastAPI"
          profileImg={myself}
          heroImg={heroImg}
        />
         <ParticlesBackground count={25} />
        <section className="app-panel compact-row">
          <ExperienceAccordion />
          <SkillsInteractive />
        </section>

        {/** Projects carousel */}
        <ProjectsCarousel projects={projects} />

        <Footer />
      </main>
    </>
  );
};

export default Home;
