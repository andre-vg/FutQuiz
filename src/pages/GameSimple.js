import { React, useEffect, useState } from "react";
import perguntas from "../Futquiz.json";

function GameSimple() {
  const [aleatorio, setAleatorio] = useState(0);
  const [ponto, setPonto] = useState(0);
  const [questao, setQuestao] = useState("");
  const [imagem, setImagem] = useState("");
  const [vidas, setVidas] = useState(3);

  const handleFalso = () => {
    if (perguntas[aleatorio].resposta === "F") {
      console.log("Você acertou!");
      setPonto(ponto + 1);
    } else {
      console.log("Você errou!");
      setVidas(vidas - 1);
    }
    geraQuestao();
  };

  const handleVerdadeiro = () => {
    if (perguntas[aleatorio].resposta === "V") {
      console.log("Você acertou!");
      setPonto(ponto + 1);
    } else {
      console.log("Você errou!");
      setVidas(vidas - 1);
    }
    geraQuestao();
  };

  const handleGameOver = () => {
    if (vidas === 0) {
      document.getElementById("game").innerHTML = "";
      document.getElementById("vidas").innerHTML = "";
      document.getElementById("pontos").innerHTML = "";
      document.getElementById("game").innerHTML = `
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h1>Game Over</h1>
              <h2>Sua pontuação foi: ${ponto}</h2>
            </div>
          </div>
        </div>
      `;
    }
  };

  const geraQuestao = () => {
    //random number beetwen 0 and the length of the array
    if (vidas > 0) {
      const random = Math.floor(Math.random() * perguntas.length);
      setAleatorio(random);
      setQuestao(perguntas[random].pergunta);
      setImagem(perguntas[random].imagem);
    } else {
      console.log("Game Over!");
      handleGameOver();
    }
  };

  useEffect(() => {
    geraQuestao();
  }, []);

  return (
    <>
      <div id="vidas">
        <div className="text-center bebasGrudado text-7xl mt-[3%] flex justify-center">
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
      </div>
      <div className="text-center bebasGrudado text-7xl mt-[1%]" id="pontos">
        Pontos: {ponto}
      </div>
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center h-[44%] w-[50%] bg-slate-400 rounded-3xl shadow-2xl"
        id="game"
      >
        {/* <h1>Game FUTQUIZ dev</h1>

        <div>{ponto}</div> */}
        <div className="flex h-full">
          <img
            className="h-[100%] w-[30%] ml-0 rounded-l-3xl"
            src={imagem}
            alt=""
          ></img>

          <div className="w-[70%] self-center Montserrat mx-2 font-bold text-xl">
            <h1>- {questao}</h1>
          </div>
        </div>

        <div className="flex absolute justify-around top-[110%] but">
          <button
            class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-8 rounded text-center"
            onClick={handleVerdadeiro}
          >
            Correto
          </button>
          <button
            class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-8 rounded text-center"
            onClick={handleFalso}
          >
            Errado
          </button>
        </div>
      </div>
    </>
  );
}

export default GameSimple;
