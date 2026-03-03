// src/components/SkillsInteractive.jsx
import React from "react";
import "../styles/skillsInteractive.css";

const skillsData = [
  {
    category: "Languages",
    items: [
      { name: "C#", level: "80" },
      { name: "Python", level: "90" },
      { name: "JavaScript", level: "70" },
      { name: "TypeScript", level: "50" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", level: "80" },
      { name: "Next.js", level: "60" },
      { name: "Blazor", level: "70" },
      { name: "HTML", level: "95" },
      { name: "CSS", level: "90" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "ASP.NET Core (.NET)", level: "80" },
      { name: "Node.js", level: "90" },
      { name: "FastAPI", level: "75" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", level: "75" },
      { name: "SQL Server", level: "90" },
      { name: "SQLite", level: "90" },
      { name: "Azure SQL", level: "70" },
      { name: "Entity Framework Core", level: "70" },
    ],
  },
  {
    category: "DevOps & Tools",
    items: [
      { name: "Docker", level: "70" },
      { name: "Git", level: "95" },
      { name: "CI/CD Pipelines", level: "100" },
      { name: "REST APIs", level: "75" },
      { name: "Unit Testing", level: "85" },
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
