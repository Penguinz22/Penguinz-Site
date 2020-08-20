import React from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  const onClick = () => {
    history.push("/projects");
  };

  return (
    <div
      className="p-5 flex flex-col items-center justify-center"
      style={{ minHeight: "80vh" }}
    >
      <h1 className="font-mono text-6xl font-medium text-white">Penguinz</h1>
      <h2 className="font-mono text-3xl font-light text-gray-200 leading-none">
        Just some developer
      </h2>
      <div
        className="rounded-md bg-blue-400 hover:bg-blue-500 text-white px-6 py-2 text-center text-2xl font-semibold w-3/4 md:w-2/3 mt-16 cursor-pointer"
        onClick={onClick}
      >
        View my projects
      </div>
    </div>
  );
};

export default Home;
