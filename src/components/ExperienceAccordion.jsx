// src/components/ExperienceAccordion.jsx
import React, { useState, useRef, useEffect } from "react";
import "../styles/experienceAccordion.css";

const experienceData = [
  {
    role: "Software Engineer - Z4KKD (Freelance)",
    date: "April 2025 - Present",
    bullets: [
      "Delivered 10+ web and SaaS applications with React (Vite), FastAPI, and .NET Core, emphasizing speed, responsiveness, and maintainability.",
      "Designed REST APIs and integrated PostgreSQL/SQL Server databases, powering dynamic dashboards and reporting tools.",
      "Collaborated with clients to deliver custom tools, dashboards, and automation scripts.",
      "Reduced client app load times by up to 35% through async endpoints, caching, and payload optimization."
    ]
  },
  {
    role: "Software Developer - Ameritech Data Solutions",
    date: "February 2024 - March 2025",
    bullets: [
      "Developed and supported C#/.NET Core logistics tools for 200+ operations users.",
      "Optimized SQL Server and LINQ queries, improving reporting performance by 30%.",
      "Built frontend and modular backend tools extending legacy systems while ensuring dashboard compatibility.",
      "Collaborated closely with the founder and engineering team to complete high-impact tickets and drive improvements."
    ]
  },
  {
    role: "Independent Game Developer - Z4KKD (Itch.io)",
    date: "April 2020 - Jan 2023",
    bullets: [
      "Designed modular UI/UX systems and backend logic in Unity (C#) and Unreal Engine.",
      "Improved runtime performance by 20% through profiling, object pooling, and memory optimization.",
      "Managed full development lifecycle: concept, implementation, testing, and deployment."
    ]
  }
];

const ExperienceAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const bodyRefs = useRef({});

  useEffect(() => {
    Object.entries(bodyRefs.current).forEach(([key, el]) => {
      if (!el) return;
      el.style.maxHeight = key === activeIndex ? `${el.scrollHeight}px` : "0px";
    });
  }, [activeIndex]);

  const toggleSection = (key) => {
    setActiveIndex(activeIndex === key ? null : key);
  };

  return (
    <section className="experienceAccordion" id="experience">
      {/* --- ABOUT ME (always open) --- */}
<div className="accordionCard glass-card always-open">
  <div className="accordionHeader">
    <h2>About Me</h2>
  </div>
  <div className="accordionBody open">
    <p className="about-text">
      Full Stack Software Engineer with 5+ years of experience building
      production-grade web applications, APIs, and developer tools across
      logistics, SaaS, and game development. Skilled in backend
      optimization, modern frontend frameworks, and secure authentication.
      Proven ability to ship fast and deliver high-value solutions that
      scale.
    </p>
  </div>
</div>


      {/* --- PROFESSIONAL EXPERIENCE (no header label) --- */}
      {experienceData.map((exp, idx) => (
        <div key={idx} className="accordionCard glass-card">
          <div
            className="accordionHeader clickable"
            onClick={() => toggleSection(`exp-${idx}`)}
          >
            <h2>{exp.role}</h2>
            <span>{exp.date}</span>
          </div>
          <div
            className="accordionBody"
            ref={(el) => (bodyRefs.current[`exp-${idx}`] = el)}
            aria-hidden={activeIndex !== `exp-${idx}`}
          >
            <ul>
              {exp.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      {/* --- EDUCATION (clickable with date) --- */}
      <div className="accordionCard glass-card">
        <div
          className="accordionHeader clickable"
          onClick={() => toggleSection("education")}
        >
          <h2>Education - Strayer University</h2>
          <span>2020 - 2025</span>
        </div>
        <div
          className="accordionBody"
          ref={(el) => (bodyRefs.current["education"] = el)}
          aria-hidden={activeIndex !== "education"}
        >
          <p>
            <strong>Strayer University</strong> — Philadelphia, PA
            <br />
            <em>
              Bachelor of Science in Information Technology, Concentration in
              Software Development
            </em>
            <br />
            GPA: 4.0
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExperienceAccordion;
