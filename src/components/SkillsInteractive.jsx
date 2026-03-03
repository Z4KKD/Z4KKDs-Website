// src/components/SkillsInteractive.jsx
import React from "react";
import "../styles/skillsInteractive.css";

const skillsData = [
  {
    category: "Languages",
    items: [
      { name: "C#", level: "75" },
      { name: "Python", level: "60" },
      { name: "JavaScript", level: "50" },
      { name: "TypeScript", level: "50" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "HTML", level: "90" },
      { name: "CSS", level: "90" },
      { name: "React", level: "75" },
      { name: "Blazor", level: "65" },
      { name: "Next.js", level: "50" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "ASP.NET Core (.NET)", level: "75" },
      { name: "Node.js", level: "75" },
      { name: "FastAPI", level: "50" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "SQL Server", level: "75" },
      { name: "SQLite", level: "75" },
      { name: "PostgreSQL", level: "60" },
      { name: "Entity Framework Core", level: "60" },
      { name: "Azure SQL", level: "50" },
    ],
  },
  {
    category: "DevOps & Tools",
    items: [
      { name: "Git", level: "90" },
      { name: "CI/CD Pipelines", level: "75" },
      { name: "Unit Testing", level: "75" },
      { name: "Docker", level: "60" },
      { name: "REST APIs", level: "60" },

    ],
  },
];

const SkillsInteractive = () => {
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
                <h3 className="proficiencyTitle">Proficiency</h3>
                <ul>
                  {skill.items.map((s, i) => (
                    <li key={i}>
                      <span>{s.name}</span>
                      <span className="skillItemLevel">{s.level ? `${s.level}%` : ""}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsInteractive;
