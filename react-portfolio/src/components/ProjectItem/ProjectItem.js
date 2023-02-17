import React from "react";
import "./ProjectItem.css";

const ProjectItem = ({ item }) => {
  return (
    <div className="projectitem">
      <h2>{item.title}</h2>
      <div className="img-container">
        <img src={item.img} alt={item.title} />
        <div className="item-overlay">
          <a href={item.preview}>Live Preview</a>
          <a href={item.code}>View Code</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
