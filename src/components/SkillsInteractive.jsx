// src/components/SkillsInteractive.jsx
import React, { useEffect } from "react";
import "../styles/skillsInteractive.css";

const skillsData = [
  { category: "Languages", items: ["C#", "Python", "JavaScript", "TypeScript", "HTML", "CSS"], level: 90 },
  { category: "Frontend", items: ["React", "Next.js", "Angular"], level: 85 },
  { category: "Backend & Frameworks", items: [".NET Core", "FastAPI", "Node.js/Express", "Django", "Flask"], level: 80 },
  { category: "Databases", items: ["PostgreSQL", "SQL Server", "MongoDB", "SQLite", "Azure SQL"], level: 75 },
  { category: "Cloud & DevOps", items: ["Docker", "Git", "Azure", "AWS", "CI/CD"], level: 70 },
];

const SkillsInteractive = () => {
  useEffect(() => {
    // animate progress bars on mount
    const bars = document.querySelectorAll(".progress");
    bars.forEach((b) => {
      const width = b.dataset.level;
      setTimeout(() => (b.style.width = `${width}%`), 200);
    });
  }, []);

  return (
    <section className="skillsInteractive">

      <div className="skillsGrid">
        {skillsData.map((skill, idx) => (
          <div key={idx} className="skillCard" tabIndex={0}>
            <div className="cardInner">
              <div className="cardFront">
                <h2>{skill.category}</h2>
              </div>

              <div className="cardBack">
                <ul>
                  {skill.items.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
                <div className="progressBar" aria-hidden>
                  <div className="progress" data-level={skill.level} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsInteractive;
