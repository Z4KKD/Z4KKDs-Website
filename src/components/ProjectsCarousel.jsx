// src/components/ProjectsCarousel.jsx
import React, { useRef } from "react";
import "../styles/projectsCarousel.css";

const ProjectsCarousel = ({ projects = [] }) => {
  const containerRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e) => {
    isDown.current = true;
    containerRef.current.classList.add("dragging");
    startX.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeft.current = containerRef.current.scrollLeft;
  };

  const onMouseLeave = () => {
    isDown.current = false;
    containerRef.current.classList.remove("dragging");
  };

  const onMouseUp = () => {
    isDown.current = false;
    containerRef.current.classList.remove("dragging");
  };

  const onMouseMove = (e, idx) => {
    // drag-to-scroll
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleCardMouseMove = (e, el) => {
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height;
    const rx = (py - 0.5) * 10; // rotateX
    const ry = (px - 0.5) * -10; // rotateY
    el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) scale(1.03)`;
  };

  const handleCardLeave = (el) => {
    el.style.transform = "";
  };

  return (
    <section className="projectsCarousel">
      <h1>Top Projects & Games</h1>
      <div
        className="carouselContainer"
        ref={containerRef}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={(e) => onMouseMove(e)}
      >
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="tiltCard"
            onMouseMove={(e) => handleCardMouseMove(e, e.currentTarget)}
            onMouseLeave={(e) => handleCardLeave(e.currentTarget)}
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.28), rgba(0,0,0,0.72)), url(${project.img})`,
            }}
          >
            <div className="projectCard">
              <div className="overlay">
                <h2>{project.title}</h2>
                <p className="desc">{project.description}</p>

                <div className="buttonGroup">
                  {project.links?.map((link, i) => (
                    <a key={i} href={link.url} target="_blank" rel="noreferrer">
                      <button>{link.label}</button>
                    </a>
                  ))}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer">
                      <button>Play</button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <small className="hint">Drag horizontally or hover a card for tilt</small>
    </section>
  );
};

export default ProjectsCarousel;
