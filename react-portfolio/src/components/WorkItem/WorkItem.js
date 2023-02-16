import React from "react";
import "./WorkItem.css";

const WorkItem = ({ item }) => {
  return (
    <ul className="work-item">
      <li>
        <div className="dot"/>
        <p>
          <span>{item.year}</span>
          <span>{item.title}</span>
          <span>{item.duration}</span>
        </p>
        <p>{item.details}</p>
      </li>
    </ul>
  );
};

export default WorkItem;
