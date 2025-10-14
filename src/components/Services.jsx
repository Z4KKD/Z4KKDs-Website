import React from "react";
import "../styles/services.css";

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

const skillsData = [
  { category: "Languages", items: "C#, Python, JavaScript, TypeScript, HTML, CSS" },
  { category: "Frontend", items: "React, Next.js, Angular" },
  { category: "Backend & Frameworks", items: ".NET Core, ASP.NET, FastAPI, Django, Flask, Node.js/Express" },
  { category: "Databases", items: "PostgreSQL, SQL Server, MongoDB Atlas, SQLite, Azure SQL" },
  { category: "Cloud & DevOps", items: "Docker, Git, Swagger, Postman, Azure, AWS, CI/CD Pipelines" },
  { category: "Testing & Methodologies", items: "Unit/Integration Testing (xUnit, Pytest, Jest), Agile/Scrum, Jira" }
];

const Services = () => {
  return (
    <section className="services compact" id="services">
      {/* About Me */}
      <h1>About Me</h1>
      <p className="about-text">
        Full Stack Software Engineer with 5+ years of experience building production-grade web apps,
        APIs, and tools across logistics, SaaS, and game platforms. Skilled in backend optimization,
        modern frontend frameworks, and secure authentication. Proven ability to ship fast and deliver value.
      </p>

      {/* Technical Skills */}
      <h1>Technical Skills</h1>
      <div className="skills-grid">
        {skillsData.map((skill, i) => (
          <div key={i} className="skill-category">
            <h2>{skill.category}</h2>
            <p>{skill.items}</p>
          </div>
        ))}
      </div>

      {/* Professional Experience */}
      <h1>Professional Experience</h1>
      <div className="experience-grid">
        {experienceData.map((exp, i) => (
          <div key={i} className="experience-card">
            <h2>{exp.role}</h2>
            <span className="experience-date">{exp.date}</span>
            <ul>
              {exp.bullets.map((bullet, j) => (
                <li key={j}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Education */}
      <h1>Education</h1>
      <div className="education">
        <p><strong>Strayer University - Philadelphia, PA</strong> (2020 - 2025) | GPA 4.0</p>
        <p>Bachelor of Science in Information Technology, Concentration in Software Development</p>
      </div>
    </section>
  );
};

export default Services;
