import React from "react";
import ProjectItem from "../ProjectItem/ProjectItem";
import cozy from "../../assets/cozy.jpg";
import coin from "../../assets/coin.jpg";
import legends from "../../assets/legends.png";
import "./Projects.css";

const projs = [
  {
    img: legends,
    title: "Legends",
    code: "https://github.com/SeanSchmidt89/legends",
    preview: "https://regal-mousse-a839c4.netlify.app/",
  },
  {
    img: coin,
    title: "Coin Crypt",
    code: "https://github.com/SeanSchmidt89/coin-crypt",
    preview: "https://curious-cobbler-2fede2.netlify.app/",
  },
  {
    img: cozy,
    title: "Cozy Streamer",
    code: "https://github.com/SeanSchmidt89/cozy-streamer",
    preview: "https://fabulous-conkies-495b0f.netlify.app/",
  },
];

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projs-container">
        {projs.map((item) => (
          <ProjectItem key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
