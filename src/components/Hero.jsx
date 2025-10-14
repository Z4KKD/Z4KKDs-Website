import React from "react";
import "../styles/hero.css";

const Hero = ({ title, subtitle, description, btnText, btnLink, imgSrc }) => {
  return (
    <section className="main" id="hero">
      <div className="main__container">
        <div className="main__content">
          <h1><strong>{title}</strong></h1>
          <h2><em>{subtitle}</em></h2>
          {description && <h3>{description}</h3>}
          {btnText && (
            <button className="main__btn">
              <a href={btnLink}>{btnText}</a>
            </button>
          )}
        </div>
        <div className="main__img--container">
          <img src={imgSrc} alt="main" id="main__img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
