import React, { useEffect } from "react";

function Vidas(props) {
  const { vidas } = props;

  const selecionaVida = () => {
    if (vidas === 3) {
      return (
        <div
          className="text-center bebasGrudado text-7xl mt-[1%] flex justify-center"
          id="vida"
        >
          <img
            className="h-[100%] w-[5%] mx-4"
            src="https://freesvg.org/img/1552187822.png"
            alt=""
          />
          <img
            className="h-[100%] w-[5%] mx-4"
            src="https://freesvg.org/img/1552187822.png"
            alt=""
          />
          <img
            className="h-[100%] w-[5%] mx-4"
            src="https://freesvg.org/img/1552187822.png"
            alt=""
          />
        </div>
      );
    }
    if (vidas === 2) {
      return (
        <div
          className="text-center bebasGrudado text-7xl mt-[1%] flex justify-center"
          id="vida"
        >
          <img
            className="h-[100%] w-[5%] mx-4"
            src="https://freesvg.org/img/1552187822.png"
            alt=""
          />
          <img
            className="h-[100%] w-[5%] mx-4"
            src="https://freesvg.org/img/1552187822.png"
            alt=""
          />
        </div>
      );
    }
    if (vidas === 1) {
      return (
        <div
          className="text-center bebasGrudado text-7xl mt-[1%] flex justify-center"
          id="vida"
        >
          <img
            className="h-[100%] w-[5%] mx-4"
            src="https://freesvg.org/img/1552187822.png"
            alt=""
          />
        </div>
      );
    }
    if (vidas === 0) {
      return (
        <div
          className="text-center bebasGrudado text-7xl mt-[3%] flex justify-center"
          id="vida"
        ></div>
      );
    }
  };
  return <div>{selecionaVida()}</div>;
}

export default Vidas;
