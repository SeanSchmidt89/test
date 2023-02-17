import React from "react";
import WorkItem from "../WorkItem/WorkItem";
import "./Work.css";

const data = [
  {
    year: 2020,
    title: "Caring for the Cascades",
    duration: "1 Year",
    details: "In home medical care for Hosipice clients",
  },
  {
    year: 2022,
    title: "Vet-Tech Program (full-time school)",
    duration: "6 Months",
    details:
      "I attended a coding bootcamp named PDX Code-Guild throught a program called Vet-Tech that is run from the VA",
  },
  {
    year: 2020,
    title: "Shipment Packer",
    duration: "6 Months",
    details: "Apel Extrusions",
  },
  {
    year: 2017,
    title: "New Horizons",
    duration: "4 Years",
    details: "In home medical care for Hosipice clients",
  },
  {
    year: 2012,
    title: "US Navy",
    duration: "5 Years",
    details:
      "Navy Corpsman at Balboa Naval Hospital and 1st Marine Division Camp Pendelton",
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
