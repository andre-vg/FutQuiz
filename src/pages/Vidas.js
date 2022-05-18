import React from "react";
import bola from "../assets/novaBola.png";
import xis from "../assets/xis.png";
import { BiFootball, BiX, BiXCircle } from "react-icons/bi";
import { IoIosFootball, IoMdFootball } from "react-icons/io";
import { RiFootballFill, RiFootballLine } from "react-icons/ri";
import { GiSoccerBall, GiSoccerKick } from "react-icons/gi";

function Vidas(props) {
  const { vidas } = props;

  const selecionaVida = () => {
    if (vidas === 3) {
      return (
        <div
          className="text-center bebasGrudado text-7xl mt-[1%] flex justify-center"
          id="vida"
        >
          <GiSoccerBall
            size={100}
            className="mx-4 text-green-600 duration-1000 transition-all"
          />
          <GiSoccerBall
            size={100}
            className="mx-4 text-green-600 duration-1000 transition-all"
          />
          <GiSoccerBall
            size={105}
            className="mx-4 text-green-600 duration-1000 transition-all"
          />
          {/* <img
            className="h-[100%] w-[12%] sm:w-[8%] lg:w-[5%] mx-4"
            src={bola}
            alt=""
            height="72px"
            width="72px"
          />
          <img
            className="h-[100%] w-[12%] sm:w-[8%] lg:w-[5%] mx-4"
            src={bola}
            alt=""
            height="72px"
            width="72px"
          />
          <img
            className="h-[100%] w-[12%] sm:w-[8%] lg:w-[5%] mx-4"
            src={bola}
            alt=""
            height="72px"
            width="72px"
          /> */}
        </div>
      );
    }
    if (vidas === 2) {
      return (
        <div
          className="text-center bebasGrudado text-7xl mt-[1%] flex justify-center"
          id="vida"
        >
          <GiSoccerBall
            size={100}
            className="mx-4 text-green-600 duration-1000 transition-all"
          />
          <GiSoccerBall
            size={100}
            className="mx-4 text-green-600 duration-1000 transition-all"
          />
          <GiSoccerBall
            size={105}
            className="mx-4 text-neutral-900 duration-1000 transition-all"
          />
          {/* <img
            className="h-[100%] w-[12%] sm:w-[8%] lg:w-[5%] mx-4"
            src={bola}
            alt=""
            height="72px"
            width="72px"
          />
          <img
            className="h-[100%] w-[12%] sm:w-[8%] lg:w-[5%] mx-4"
            src={bola}
            alt=""
            height="72px"
            width="72px"
          />
          <img
            className="h-[100%] w-[12%] sm:w-[8%] lg:w-[5%] mx-4"
            src={xis}
            alt=""
            height="72px"
            width="72px"
          /> */}
        </div>
      );
    }
    if (vidas === 1) {
      return (
        <div
          className="text-center bebasGrudado text-7xl mt-[1%] flex justify-center"
          id="vida"
        >
          <GiSoccerBall
            size={100}
            className="mx-4 text-green-600 duration-1000 transition-all"
          />
          <GiSoccerBall
            size={100}
            className="mx-4 text-neutral-900 duration-1000 transition-all"
          />
          <GiSoccerBall
            size={105}
            className="mx-4 text-neutral-900 duration-1000 transition-all"
          />
        </div>
      );
    }
    if (vidas === 0) {
      return (
        <div
          className="text-center bebasGrudado text-7xl mt-[1%] flex justify-center"
          id="vida"
        >
          <GiSoccerBall
            size={100}
            className="mx-4 text-neutral-900 duration-1000 transition-all"
          />
          <GiSoccerBall
            size={100}
            className="mx-4 text-neutral-900 duration-1000 transition-all"
          />
          <GiSoccerBall
            size={105}
            className="mx-4 text-neutral-900 duration-1000 transition-all"
          />
        </div>
      );
    }
  };
  return <div>{selecionaVida()}</div>;
}

export default Vidas;
