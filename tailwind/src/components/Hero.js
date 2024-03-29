import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src="https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
        alt="hero pic"
      />
      <div className="bg-black/40 absolute top-0 left-0 w-full h-screen" />
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white ">
        <div className="md:left-[10%] max-w-[1100px] m-auto absolute p4">
          <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">
            Miami Beach
          </h1>
          <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl">
            Spring Break Getaways
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <button className="bg-white text-black">Reserve Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

//1330
