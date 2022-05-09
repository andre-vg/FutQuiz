import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgDarkMode } from "react-icons/cg";

function Home() {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div className={isActive ? "white" : "dark"}>
      <div className="bg-neutral-300 absolute h-full w-full dark:bg-gray-700 transition-colors duration-1000">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="my-4">
            <h1 className="font-bold bebas text-gray-500 dark:text-slate-200 text-9xl transition-colors duration-1000">
              FUT<strong className="text-green-500">QUIZ</strong>
            </h1>
            <h2 className="font montserrar text-gray-500 dark:text-slate-200 text-2xl transition-colors duration-1000">
              Responda as perguntas a seguir para testar seu conhecimento sobre
              futebol!
            </h2>
            <br />
          </div>
          <Link to="/dev">
            <button className="bg-green-500 hover:scale-125 text-gray-500 dark:text-slate-200 font-bold py-2 px-4 rounded mt-4 text-center shadow-xl  dark:shadow-lg dark:shadow-green-600 duration-500">
              Jogar
            </button>
          </Link>
        </div>
        <button
          className="bg-gray-800 text-white font-bold p-4 hover:scale-110 rounded-full text-center absolute ml-6 top-[92%] group dark:bg-slate-300 duration-1000"
          onClick={handleToggle}
        >
          <CgDarkMode className="dark:text-gray-800 duration-1000" />
          <span className="absolute w-auto ml-12 p-2 rounded-md -mt-7 scale-0 transition-all duration-300 min-w-max origin-left bg-green-500 dark:bg-green-700 group-hover:scale-100">
            {isActive ? "Tema Escuro" : "Tema Claro"}
          </span>
        </button>
      </div>
    </div>
  );
}

export default Home;
