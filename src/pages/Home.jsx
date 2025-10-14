import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Footer from "../components/Footer";

// 🖼️ Import assets
import heroImg from "../assets/Z4KKD.gif";
import game2 from "../assets/game2.png";
import game3 from "../assets/game3.png";
import game4 from "../assets/game4.png";
import project1 from "../assets/ZakksForms.png";
import project2 from "../assets/DataVisualizationTool.png";
import project3 from "../assets/ChatBotAI.png";
import myself from "../assets/myself.jpg";

const Home = () => {
  const projects = [
    {
      img: project1,
      title: "AI-Powered Form Builder",
      description:
        "Full-stack web application that allows users to create, share, and collect responses through custom forms (like Google Forms), enhanced with AI-powered summaries and sentiment analysis via a FastAPI microservice.",
      links: [
        { label: "Live Site", url: "https://zakksforms.netlify.app/" },
        { label: "Open Source", url: "https://github.com/Z4KKD/ZakksForms-Open-Source" },
      ],
    },
    {
      img: project2,
      title: "Data Visualization Tool",
      description:
        "Interactive web app where users can upload CSV or Excel files and generate dynamic visualizations using D3.js, offering multiple chart types and real-time filtering.",
      links: [
        { label: "Open Source", url: "https://github.com/Z4KKD/Data-visualization-tool" },
      ],
    },
    {
      img: project3,
      title: "Chat Bot AI",
      description:
        "A Django-based chatbot powered by OpenAI's GPT-3.5-turbo model with the OMDb API to fetch movie details and provide personalized movie recommendations.",
      links: [
        { label: "Open Source", url: "https://github.com/Z4KKD/Ai-ChatBot" },
      ],
    },
  ];

  const games = [
    {
      img: game4,
      title: "Terminal Hero",
      description:
        "Terminal Hero is an engaging browser-based text RPG set in a unique terminal world.",
      link: "https://z4kkd.itch.io/terminalhero",
    },
    {
      img: game3,
      title: "Downhill Hurts",
      description: "Downhill Hurts is a downhill snowboarding survival game.",
      link: "https://z4kkd.itch.io/downhill-hurts",
    },
    {
      img: game2,
      title: "Broke Booger",
      description:
        "A 2D platformer made in Unity where you can create and destroy the world around you.",
      link: "https://z4kkd.itch.io/broke-booger",
    },
  ];

  return (
    <>
      <Navbar />
      <Hero
        title="Zachary Duncan"
        subtitle="(Zakk)"
        description="Full-Stack Software Engineer"
        imgSrc={heroImg}
        profileImg={myself}
      />
      <Services />

      {/* 🧠 Top Projects Section */}
      <section className="services compact-section">
        <h1>Top Projects</h1>
        <div className="services__container compact-container">
          {projects.map((project, index) => (
            <div
              key={index}
              className="services__cardprojects compact-card project-card"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(0,0,0,0.8)), url(${project.img})`,
              }}
            >
              <div className="card-overlay">
                <h2>{project.title}</h2>
                {project.description && (
                  <p className="card-description">{project.description}</p>
                )}
              </div>

              <div className="button-group dark-bg">
                {project.links.map((link, i) => (
                  <a key={i} href={link.url} target="_blank" rel="noopener noreferrer">
                    <button>{link.label}</button>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🎮 Games Section */}
      <section className="services compact-section">
        <h1>Top Games</h1>
        <div className="services__container compact-container">
          {games.map((game, index) => (
            <div
              key={index}
              className="services__cardgames compact-card game-card"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(0,0,0,0.8)), url(${game.img})`,
              }}
            >
              <div className="card-overlay">
                <h2>{game.title}</h2>
                {game.description && (
                  <p className="card-description">{game.description}</p>
                )}
              </div>
              <div className="button-group dark-bg">
                <a href={game.link} target="_blank" rel="noopener noreferrer">
                  <button>Play</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
