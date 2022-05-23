import React, { useEffect, useState } from "react";
import Vidas from "./Vidas";

function Tutorial() {
  const [isActive] = useState("false");

  useEffect(() => {
    document.getElementById(
      "imagem"
    ).style.backgroundImage = `url("https://www.ie.com.br/wp-content/uploads/2021/11/pontos-turisticos-inglaterra.jpg")`;
  }, []);

  return (
    <div>
      <>
        <div className={isActive ? "dark" : "white"}>
          <div className="bg-neutral-300 absolute h-full w-full dark:bg-neutral-700 transition-colors duration-1000">
            <div id="vidas">
              <Vidas vidas={3} />
            </div>
            <div
              className="text-center bebasGrudado text-7xl mt-[3%] text-black"
              id="pontos"
            >
              Pontos: {5}
            </div>
            <div id="game">
              <div class="center">
                <div class="property-card">
                  <div className={"property-image"} id="imagem">
                    <div class="property-image-title">
                      {/* <!-->Card Title</h5> If you want it, turn on the CSS also. --> */}
                    </div>
                  </div>
                  <div class="property-description">
                    <h5 className="dark:text-slate-200">Pergunta 5</h5>
                    <p className="dark:text-slate-300 mt-4 font-[system-ui] text-xl">
                      O futebol foi inventado na Inglaterra
                    </p>
                  </div>
                  <div className="row h-16 mt-[32rem] flex">
                    <div className="col-6">
                      <button className="bg-green-600 hover:bg-green-700 text-white font-bold pt-2 pb-6 px-8 rounded text-center w-[25rem] rounded-r-none">
                        Verdadeiro
                      </button>
                    </div>
                    <div className="col-6">
                      <button className="bg-red-600 hover:bg-red-700 text-white font-bold pt-2 pb-6 px-8 rounded text-center w-[25rem] rounded-l-none">
                        Falso
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer className="left-[48.2%] top-[94%] absolute font-extrabold  text-neutral-700 text-xl dark:text-neutral-300 duration-1000">
              Fut<strong className="text-green-600">Quiz</strong>
            </footer>
          </div>
        </div>
      </>
    </div>
  );
}

export default Tutorial;
