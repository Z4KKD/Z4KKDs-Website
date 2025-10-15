import React, { useEffect, useRef } from "react";
import "../styles/particlesBackground.css";
import logoImg from "../assets/Z4KKD.gif";

const ParticlesBackground = ({ count = 20, smallCount = 50 }) => {
  const bigParticlesRef = useRef([]);
  const smallParticlesRef = useRef([]);
  const trailParticlesRef = useRef([]);

  // Big particles follow mouse
  useEffect(() => {
    const particles = bigParticlesRef.current;
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const w = window.innerWidth;
      const h = window.innerHeight;
      particles.forEach((p) => {
        const speed = parseFloat(p.dataset.speed || "0.5");
        const tx = (clientX - w / 2) * 0.02 * speed;
        const ty = (clientY - h / 2) * 0.02 * speed;
        p.style.transform = `translate(${tx}px, ${ty}px)`;
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Small particles float randomly
  useEffect(() => {
    const smallParticles = smallParticlesRef.current;
    let animationFrame;
    const animate = () => {
      smallParticles.forEach((p) => {
        const top = parseFloat(p.style.top || 0);
        const left = parseFloat(p.style.left || 0);
        const speedY = parseFloat(p.dataset.speedY || 0.1);
        const speedX = parseFloat(p.dataset.speedX || 0.05);
        p.style.top = `${(top + speedY) % 100}%`;
        p.style.left = `${(left + speedX) % 100}%`;
      });
      animationFrame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // Mouse trail particles
  useEffect(() => {
    const trailParticles = trailParticlesRef.current;
    // Initialize all positions at center
    const positions = trailParticles.map(() => ({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    }));

    const handleMouseMove = (e) => {
      // First particle follows mouse slowly
      positions[0].x += (e.clientX - positions[0].x) * 0.05;
      positions[0].y += (e.clientY - positions[0].y) * 0.05;

      // Rest follow the previous particle
      for (let i = 1; i < positions.length; i++) {
        positions[i].x += (positions[i - 1].x - positions[i].x) * 0.15;
        positions[i].y += (positions[i - 1].y - positions[i].y) * 0.15;
      }

      positions.forEach((pos, i) => {
        const p = trailParticles[i];
        if (p) p.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="global-particles">
      {/* Centered Logo */}
      <div className="particles-logo">
        <img src={logoImg} alt="Z4KKD Logo" />
      </div>

      {/* Big particles */}
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={`big-${i}`}
          className="particle big"
          ref={(el) => (bigParticlesRef.current[i] = el)}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${8 + Math.random() * 28}px`,
            height: `${8 + Math.random() * 28}px`,
            opacity: `${0.15 + Math.random() * 0.4}`,
            position: "absolute",
            borderRadius: "50%",
            background: "rgba(94,165,47,0.5)",
            filter: "blur(6px)",
            transition: "transform 0.12s linear",
            zIndex: 0,
          }}
          data-speed={0.2 + Math.random() * 0.9}
        />
      ))}

      {/* Small shiny particles */}
      {Array.from({ length: smallCount }).map((_, i) => (
        <span
          key={`small-${i}`}
          className="particle small"
          ref={(el) => (smallParticlesRef.current[i] = el)}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
            opacity: `${1 + Math.random() * 0.5}`,
            position: "absolute",
            borderRadius: "50%",
            background: `radial-gradient(circle, #1eff00ff, rgba(255,255,255,0))`,
            filter: "blur(2px)",
            zIndex: 0,
          }}
          data-speedY={0.05 + Math.random() * 0.15}
          data-speedX={0.01 + Math.random() * 0.05}
        />
      ))}

            {Array.from({ length: 10 }).map((_, i) => (
        <span
          key={`trail-${i}`}
          className="particle trail"
          ref={(el) => (trailParticlesRef.current[i] = el)}
          style={{
            width: `${4 + Math.random() * 6}px`,
            height: `${4 + Math.random() * 6}px`,
            opacity: 0.9,
            borderRadius: "50%",
            position: "absolute",
            pointerEvents: "none",
            transform: `translate(${window.innerWidth/2}px, ${window.innerHeight/2}px)`,
            backgroundColor: "#000",
            boxShadow: "0 0 6px 2px #fff", // white outline/glow
            filter: "blur(1px)", // optional: smooth glow
            zIndex: 1,
          }}
        />
      ))}
    </div>
  );
};

export default ParticlesBackground;
