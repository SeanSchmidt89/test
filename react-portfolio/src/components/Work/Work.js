import React from "react";
import WorkItem from "../WorkItem/WorkItem";
import "./Work.css";

const data = [
  {
    year: 2020,
    title: "Google",
    duration: "3 Years",
    details: "Blah blah blah blah ajijdfoijsifojdofjjdfoia",
  },
  {
    year: 2020,
    title: "Googlesdfd",
    duration: "3 Years",
    details: "Blah blah blah blah ajijdfoijsifojdofjjdfoia",
  },
  {
    year: 2020,
    title: "Googlsdfe",
    duration: "3 Years",
    details: "Blah blah blah blah ajijdfoijsifojdofjjdfoia",
  },
  {
    year: 2020,
    title: "Goofsdfasgle",
    duration: "3 Years",
    details: "Blah blah blah blah ajijdfoijsifojdofjjdfoia",
  },
  {
    year: 2020,
    title: "Googsdfadsle",
    duration: "3 Years",
    details: "Blah blah blah blah ajijdfoijsifojdofjjdfoia",
  },
];

const Work = () => {
  return (
    <div id="work" className="work">
      <h1>WORK</h1>
      {data.map((item) => (
        <WorkItem key={item.title} item={item} />
      ))}
    </div>
  );
};

export default Work;
