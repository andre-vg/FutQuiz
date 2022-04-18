import React from "react";

function Game() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <figure class=" md:flex bg-slate-800 ]">
        <img
          class="h-[100%] w-[25%] ml-0"
          src="https://s.hs-data.com/bilder/spieler/gross/1940.jpg"
          alt=""
        />
        <div class="w-[75%]">
          <div className="mt-[90px]">
            <p class="text-xl font-bold text-slate-200 mx-10 text-justify">
              "Romário é o 4° maior artilheiro da Seleção Brasileira de Futebol"
            </p>
            <br>
            </br>
          </div>
        </div>
      </figure>
      <div class="text-center">
        <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-12 text-center mx-14">
          Correto
        </button>
        <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded text-center">
          Errado
        </button>
      </div>
    </div>
  );
}

export default Game;
