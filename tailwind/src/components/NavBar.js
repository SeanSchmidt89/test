import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";

const NavBar = () => {
  return (
    <div className="absolute w-full flex justify-between p-4 items-center">
      <h1 className="fixed top-4 left-4 text-white font-bold text-2xl z-20">
        Experiences
      </h1>
      <HiMenuAlt3
        className="fixed top-4 right-4 z-20 text-white cursor-pointer"
        size={25}
      />
      {/* <div className="aboslute top-0 h-screen left-[-200%]">
        <ul className="flex flex-col fixed w-full h-full items-center justify-center">
          <li className="font-bold text-3xl p-7 cursor-pointer">Home</li>
          <li className="font-bold text-3xl p-7 cursor-pointer">
            Destinations
          </li>
          <li className="font-bold text-3xl p-7 cursor-pointer">
            Reservations
          </li>
          <li className="font-bold text-3xl p-7 cursor-pointer">Amenitites</li>
          <li className="font-bold text-3xl p-7 cursor-pointer">Rooms</li>
        </ul>
      </div> */}
    </div>
  );
};

export default NavBar;
