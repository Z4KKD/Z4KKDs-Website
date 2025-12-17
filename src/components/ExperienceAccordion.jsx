// src/components/ExperienceAccordion.jsx
import React, { useState, useRef, useEffect } from "react";
import "../styles/experienceAccordion.css";

const experienceData = [
  {
    role: "Software Engineer - Z4KKD (Freelance)",
    date: "April 2025 - Present",
    bullets: [
      "Developed and maintained multiple full-stack web applications with React, .NET Core, and FastAPI/Flask, delivering solutions based on client needs and existing workflows.",
      "Engineered dynamic dashboards, interactive data visualizations, and custom tools using D3.js, TailwindCSS, and PostgreSQL/SQLite, helping clients analyse their data.",
      "Improved performance and responsiveness through ongoing UI updates, backend optimizations, and debugging while managing the full development lifecycle."
    ]
  },
  {
    role: "Software Developer - Ameritech Data Solutions",
    date: "February 2024 - March 2025",
    bullets: [
      "Designed and maintained C#/.NET Core tools used daily by 100+ users, improving efficiency, productivity, and performance.",
      "Modernized legacy codebases to be cleaner, more modular, and easier to maintain while adding new tools and features for business needs.",
      "Resolved client tickets and fixed high-priority issues, collaborating with managers and the engineering team to deliver reliable solutions on time.",
      "Optimized SQL Server and LINQ queries while developing a tool to archive unused database records, cutting load times by 20% and improving maintenance."
    ]
  },
  {
    role: "Independent Game Developer - Z4KKD (Itch.io)",
    date: "April 2020 - Jan 2023",
    bullets: [
      "Implemented frontend UI/UX and backend systems on Unity (C#), Unreal Engine (C++/Blueprints), and Godot (C#) while managing the full development lifecycles.",
      "Delivered cross-platform game mechanics while improving runtime performance by 40% using profiling, object pooling, and memory optimization.",
      "Trained AI models using machine learning to match player skill level and created gyroscope controls for mobile devices, enhancing overall gameplay."
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
      Full-Stack Developer with experience building websites, APIs, software, SaaS, and games. 
      Skilled in both frontend and backend development, with a focus on performance and clean, maintainable code. 
      Proven track record of shipping features, solving problems, and delivering value quickly.
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
