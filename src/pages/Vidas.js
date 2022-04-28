import React from "react";
import bola from "../assets/bola.png";
import xis from "../assets/xis.png";

function Vidas(props) {
  const { vidas } = props;

  const selecionaVida = () => {
    if (vidas === 3) {
      return (
        <div
          className="text-center bebasGrudado text-7xl mt-[1%] flex justify-center"
          id="vida"
        >
          <img className="h-[100%] w-[5%] mx-4" src={bola} alt="" />
          <img className="h-[100%] w-[5%] mx-4" src={bola} alt="" />
          <img className="h-[100%] w-[5%] mx-4" src={bola} alt="" />
        </div>
      );
    }
    if (vidas === 2) {
      return (
        <div
          className="text-center bebasGrudado text-7xl mt-[1%] flex justify-center"
          id="vida"
        >
          <img className="h-[100%] w-[5%] mx-4" src={bola} alt="" />
          <img className="h-[100%] w-[5%] mx-4" src={bola} alt="" />
          <img className="h-[100%] w-[5%] mx-4" src={xis} alt="" />
        </div>
      );
    }
    if (vidas === 1) {
      return (
        <div
          className="text-center bebasGrudado text-7xl mt-[1%] flex justify-center"
          id="vida"
        >
          <img className="h-[100%] w-[5%] mx-4" src={bola} alt="" />
          <img className="h-[100%] w-[5%] mx-4" src={xis} alt="" />
          <img className="h-[100%] w-[5%] mx-4" src={xis} alt="" />
        </div>
      );
    }
    if (vidas === 0) {
      return (
        <div
          className="text-center bebasGrudado text-7xl mt-[1%] flex justify-center"
          id="vida"
        >
          <img className="h-[100%] w-[5%] mx-4" src={xis} alt="" />
          <img className="h-[100%] w-[5%] mx-4" src={xis} alt="" />
          <img className="h-[100%] w-[5%] mx-4" src={xis} alt="" />
        </div>
      );
    }
  };
  return <div>{selecionaVida()}</div>;
}

export default Vidas;
