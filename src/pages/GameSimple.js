import { React, useEffect, useState, useRef } from "react";
import { render } from "react-dom";
import perguntas from "../Futquiz.json";
import Vidas from "./Vidas";
import { TwitterShareButton } from "react-share";
import { TwitterIcon } from "react-share";



function GameSimple() {
  const [aleatorio, setAleatorio] = useState(0);
  const [ponto, setPonto] = useState(0);
  const [questao, setQuestao] = useState("");
  const [imagem, setImagem] = useState("");
  const [vidas, setVidas] = useState(3);
  const game = useRef(null);
  const [questaoUsada, setQuestaoUsada] = useState([]);

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

      if (ponto > localStorage.getItem("MaiorScore")) {
        localStorage.setItem("MaiorScore", ponto);
      }

      render(
        <div className="container absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="row">
            <div className="col-12">
              <h1 className="font-bold text-slate-100 bebas text-9xl">
                GAME<strong className="text-red-500">OVER</strong>
              </h1>
              <br />
              <h2 className="text-slate-300 font-bold text-3xl">
                Sua pontuação foi:
                <strong className="font-extrabold text-green-600 text-4xl ml-1">
                  {ponto}
                </strong>
              </h2>
              <h2 className="text-slate-300 font-bold text-3xl">
                Maior pontuação:
                <strong className="font-extrabold text-sky-600 text-4xl ml-1">
                  {localStorage.getItem("MaiorScore")}
                </strong>
              </h2>
            </div>
          </div>
          <div className="row">
            <button className="bg-green-600 scale-100 hover:scale-110 transition-all duration-300 p-4 rounded-3xl mt-8 shadow-lg hover:shadow-2xl">
              <a href="/dev">
                <h2 className="text-slate-300 text-3xl font-extrabold">
                  Jogar
                  <strong className="font-extrabold text-black text-3xl ml-2">
                    novamente
                  </strong>
                </h2>
              </a>
            </button>
            <div>
            <TwitterShareButton title={"Fiz " + ponto + " pontos no #futQuiz" + " Veja quantos você acerta em: " } url={"https://futquiz-4jzdgd9x6-andre-vg.vercel.app/"} hashtags={["FutQuiz"]}
      >
        <TwitterIcon className="bg-black-600 scale-100 hover:scale-110 transition-all duration-300 p-4 rounded-3xl mt-8 shadow-lg hover:shadow-2xl" size={80} round />
      </TwitterShareButton>
            
          </div>
          </div>
        </div>,
        document.getElementById("game")
      );
    }
  };

  const geraQuestao = () => {
    if (vidas > 0) {
      const random = Math.floor(Math.random() * perguntas.length);
      setAleatorio(random);
      console.log(random);
      if (questaoUsada.includes(random)) {
        geraQuestao();
      } else {
        setQuestao(perguntas[random].pergunta);
        questaoUsada.push(random);
        console.log(questaoUsada);
        setImagem(perguntas[random].imagem);
      }
    } else {
      console.log("Game Over!");
      handleGameOver();
    }
  };

  useEffect(() => {
    geraQuestao();
    setQuestaoUsada([]);
  }, []);

  return (
    <>
      <div id="vidas">
        <Vidas vidas={vidas} />
      </div>
      <div className="text-center bebasGrudado text-7xl m-[1%]" id="pontos">
        Pontos: {ponto}
      </div>
      <div id="game" ref={game}>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center h-[44%] w-[50%] bg-slate-400 rounded-3xl shadow-2xl">
          {/* <h1>Game FUTQUIZ dev</h1>

        <div>{ponto}</div> */}
          <div className="flex h-full">
            <img
              className="h-[100%] w-[30%] ml-0 rounded-l-3xl"
              src={imagem}
              alt=""
              loading="eager"
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
      </div>
    </>
  );
}

export default GameSimple;
