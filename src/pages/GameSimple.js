import { React, useEffect, useState, useRef } from "react";
import { render } from "react-dom";
import perguntas from "../Futquiz.json";
import Vidas from "./Vidas";
import { TwitterShareButton } from "react-share";
import { TwitterIcon } from "react-share";
import { CgDarkMode } from "react-icons/cg";
import { FiTwitter } from "react-icons/fi";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { MdOutlineContentCopy } from "react-icons/md";

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
      geraQuestao();
    } else {
      console.log("Você errou!");
      setVidas(vidas - 1);
    }
  };

  const handleVerdadeiro = () => {
    if (perguntas[aleatorio].resposta === "V") {
      console.log("Você acertou!");
      setPonto(ponto + 1);
      geraQuestao();
    } else {
      console.log("Você errou!");
      setVidas(vidas - 1);
    }
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
              <h1 className="font-bold text-green-600 bebas text-9xl dark:text-slate-100">
                GAME
                <strong className="dark:text-red-500 text-gray-500">
                  OVER
                </strong>
              </h1>
              <br />
              <h2 className="text-gray-500 font-bold text-3xl">
                Sua pontuação foi:
                <strong className="font-extrabold text-green-600 text-4xl ml-1">
                  {ponto}
                </strong>
              </h2>
              <h2 className="text-gray-500 font-bold text-3xl">
                Maior pontuação:
                <strong className="font-extrabold text-green-600 text-4xl ml-1">
                  {localStorage.getItem("MaiorScore")}
                </strong>
              </h2>
            </div>
          </div>
          <div className="row">
            <button className="bg-green-600 scale-100 hover:scale-110 transition-all duration-300 p-4 rounded-3xl mt-8 shadow-lg hover:shadow-xl">
              <a href="/dev">
                <h2 className="text-gray-500 text-3xl font-extrabold">
                  Jogar novamente
                </h2>
              </a>
            </button>
          </div>
          <div className="inline-flex">
            <div className="col-auto">
              <TwitterShareButton
                title={
                  "🎯 Acertei " +
                  ponto +
                  " Perguntas no #FutQuiz ⚽ " +
                  " \n Veja quantas você acerta em: \n"
                }
                url={"https://futquiz-master.vercel.app/ \n"}
                hashtags={["FutQuiz"]}
              >
                <FiTwitter
                  className="text-sky-400 bg-black-600 scale-100 hover:scale-110 transition-all duration-300 p-4 rounded-3xl mx-2 mt-8 hover:shadow-2xl"
                  size={80}
                />
              </TwitterShareButton>
            </div>
            <div className="col-auto">
              <CopyToClipboard
                text={
                  "🎯 Acertei " +
                  ponto +
                  " Perguntas no #FutQuiz ⚽ " +
                  " \n Veja quantas você acerta em: \n" +
                  " https://futquiz-master.vercel.app/ \n"
                }
              >
                <button
                  className="group"
                  onClick={() => {
                    document.getElementById("copiado").innerHTML = "Copiado!";
                  }}
                >
                  <MdOutlineContentCopy
                    className="text-green-600 scale-100 hover:scale-110 transition-all duration-300 p-4 rounded-3xl mx-2 mt-8 hover:shadow-xl"
                    size={80}
                  ></MdOutlineContentCopy>
                  <div
                    id="copiado"
                    className="scale-0 font-bold group-hover:scale-100 transition-all duration-300 bg-green-600 mt-6 text-gray-800 py-2 rounded-xl shadow-md"
                  >
                    Copiar
                  </div>
                </button>
              </CopyToClipboard>
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
        document.getElementById(
          "imagem"
        ).style.backgroundImage = `url(${perguntas[random].imagem})`;
      }
    } else {
      console.log("Game Over!");
      handleGameOver();
    }
  };

  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  useEffect(() => {
    if (vidas === 0) {
      handleGameOver();
    } else {
      geraQuestao();
    }
  }, [vidas]);

  return (
    <>
      <div className={isActive ? "dark" : "white"}>
        <div className="bg-neutral-300 absolute h-full w-full dark:bg-gray-700 transition-colors duration-1000">
          <div id="vidas">
            <Vidas vidas={vidas} />
          </div>
          <div
            className="text-center bebasGrudado text-7xl mt-[3%]"
            id="pontos"
          >
            Pontos: {ponto}
          </div>
          <div id="game" ref={game}>
            <div class="center">
              <div class="property-card">
                <div className={"property-image"} id="imagem">
                  <div class="property-image-title">
                    {/* <!-->Card Title</h5> If you want it, turn on the CSS also. --> */}
                  </div>
                </div>
                <div class="property-description">
                  <h5 className="dark:text-slate-300"> Card Title </h5>
                  <p className="dark:text-slate-400">{questao} </p>
                </div>
                <div className="row h-16 mt-[32rem] flex">
                  <div className="col-6">
                    <button
                      className="bg-green-500 hover:bg-green-600 text-white font-bold pt-2 pb-6 px-8 rounded text-center w-[25rem] rounded-r-none"
                      onClick={handleVerdadeiro}
                    >
                      Verdadeiro
                    </button>
                  </div>
                  <div className="col-6">
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white font-bold pt-2 pb-6 px-8 rounded text-center w-[25rem] rounded-l-none"
                      onClick={handleFalso}
                    >
                      Falso
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="left-[48.2%] top-[94%] absolute font-extrabold  text-gray-800 text-xl dark:text-neutral-300 duration-1000">
            Fut<strong className="text-green-600">Quiz</strong>
          </footer>
        </div>
      </div>
    </>
  );
}

export default GameSimple;
