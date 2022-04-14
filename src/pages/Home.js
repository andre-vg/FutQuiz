import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
      <div className="my-4">
        <h1 className="font-bold bebas text-slate-100 text-9xl">
          FUT<strong className="text-green-500">QUIZ</strong>
        </h1>
      </div>
      <Link
        to="/game"
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4 text-center"
      >
        Jogar
      </Link>
    </div>
  );
}

export default Home;
