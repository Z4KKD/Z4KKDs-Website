import React, { useRef, useEffect } from "react";
import "../styles/heroInteractive.css";

const HeroInteractive = ({ title, subtitle, description, profileImg, heroImg }) => {
  const heroRef = useRef(null);

  useEffect(() => {
    // tilt hero card slightly on mouse move
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const rx = Math.max(Math.min(-dy / 30, 6), -6);
      const ry = Math.max(Math.min(dx / 30, 6), -6);
      heroRef.current.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="heroInteractive" aria-label="Hero">
      <div className="hero-card" ref={heroRef} role="region" aria-label="Hero card">
        <div className="hero-left">
          <h1 className="hero-title">{title}</h1>
          <h2 className="hero-sub">{subtitle}</h2>
          <p className="hero-desc">{description}</p>
          {/* Removed hero-actions div with buttons */}
        </div>

        <div className="hero-right">
          <div className="profile-wrap">
            <img src={profileImg} alt="Zachary Duncan" className="profile-pic" />
            <div className="profile-ring" />
          </div>
        </div>
      </div>

      {heroImg && (
        <img src={heroImg} alt="" className="hero-bg-gif" aria-hidden="true" />
      )}
    </section>
  );
};

export default HeroInteractive;
