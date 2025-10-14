import React from "react";
import "../styles/services.css";

const Services = () => {
  return (
    <section className="services" id="services">
      <h1>About me,</h1>
      <p>
        Full Stack Software Engineer with 5+ years building production-grade web apps, APIs, and tools across logistics, SaaS, and game platforms.
        <br />
        Strong in backend performance, modern frontend development, and secure auth. Proven ability to ship features, fix bugs, and deliver value fast.
      </p>

      <h2>Proficient Languages</h2>
      <p>C#, Python, JavaScript, TypeScript, HTML, CSS</p>
      <h2>Frontend</h2>
      <p> React, Next.js, Angular,</p>

      <h2>Backend & Frameworks</h2>
      <p>.NET Core, ASP.NET Core, FastAPI, Django, Flask, Node.js/Express  </p>

      <h2>Databases</h2>
      <p>PostgreSQL, SQL Server, MongoDB Atlas, SQLite, Azure SQL</p>

      <h2>Cloud & DevOps </h2>
      <p>Docker, Git, Swagger, Postman, Azure, AWS, CI/CD Pipelines, AWS</p>

      <h2>Testing & Methodologies</h2>
      <p>
         Unit/Integration Testing (xUnit, Pytest, Jest), Agile/Scrum, Jira
      </p>

    </section>
  );
};

export default Services;
