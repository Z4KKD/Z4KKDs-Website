// src/components/SkillsInteractive.jsx
import React, { useEffect } from "react";
import "../styles/skillsInteractive.css";

const skillsData = [
  { category: "Languages", items: ["C#", "Python", "JavaScript", "TypeScript"], level: 75 },
  { category: "Frontend", items: ["React", "Next.js", "Blazor", "HTML", "CSS"], level: 80 },
  { category: "Backend", items: ["ASP.NET Core (.NET)", "Node.js", "FastAPI"], level: 90 },
  { category: "Databases", items: ["PostgreSQL", "SQL Server", "SQLite", "Azure SQL", "Entity Framework Core"], level: 85 },
  { category: "DevOps & Tools", items: ["Docker", "Git", "Swagger", "Postman", "CI/CD Pipelines", "REST APIs", "Unit Testing"], level: 95 },
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
