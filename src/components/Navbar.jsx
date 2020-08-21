import React from "react";
import { Link } from "react-router-dom";

const NavButton = (props) => {
  return (
    <Link
      className="mx-2 md:mx-5 mt-1 hover:text-gray-300 font-medium text-sm md:text-lg"
      to={props.location}
    >
      {props.text}
    </Link>
  );
};

const Navbar = () => {
  return (
    <nav className="flex bg-purple-400 w-full text-white p-4 items-center">
      <h1 className="text-2xl font-semibold flex-grow">Penguinz</h1>
      <NavButton text="HOME" location="/" />
      <NavButton text="PROJECTS" location="/projects" />
      <NavButton text="ABOUT" location="/about" />
      <div className="md:mr-5 lg:mr-10" />
    </nav>
  );
};

export default Navbar;
