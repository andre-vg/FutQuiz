import { React, useEffect, useState, useRef } from "react";
import { render } from "react-dom";
import perguntas from "../Futquiz.json";
import Vidas from "./Vidas";
import { TwitterShareButton } from "react-share";
import { TwitterIcon } from "react-share";
import { CgDarkMode } from "react-icons/cg";
import { FiTwitter, FiX } from "react-icons/fi";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { MdOutlineContentCopy } from "react-icons/md";
import {
  useMotionValue,
  useTransform,
  motion,
  useAnimation,
} from "framer-motion";
import { IoMdTrophy } from "react-icons/io";

import { BiFootball, BiX, BiXCircle } from "react-icons/bi";
import { BsCheckLg, BsX, BsXLg } from "react-icons/bs";

function GameSimple() {
  const [aleatorio, setAleatorio] = useState(0);
  const [ponto, setPonto] = useState(0);
  const [questao, setQuestao] = useState("");
  const [nPegunta, setNPergunta] = useState(0);
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
      animando();
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
      animando();
      setVidas(vidas - 1);
    }
  };

  const handleGameOver = () => {
    if (vidas === 0) {
      document.getElementById("game").innerHTML = "";
      document.getElementById("vidas").innerHTML = "";
      document.getElementById("pontos").innerHTML = "";
      document.getElementById("botoes").innerHTML = "";

      if (ponto > localStorage.getItem("MaiorScore")) {
        localStorage.setItem("MaiorScore", ponto);
      }

      render(
        <div className="container absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="row">
            <div className="col-12">
              <h1 className="font-bold text-green-600 bebas text-8xl sm:text-[11rem] ">
                GAME
                <strong className="dark:text-neutral-300 text-neutral-700">
                  OVER
                </strong>
              </h1>
              <br />
              <h2 className="text-neutral-700 font-bold text-2xl sm:text-3xl dark:text-neutral-300">
                Sua pontuação foi:
                <strong className="font-extrabold text-green-600 text-4xl ml-1">
                  {ponto}
                </strong>
              </h2>
              <h2 className="text-neutral-700 font-bold text-2xl sm:text-3xl dark:text-neutral-300">
                Maior pontuação:
                <strong className="font-extrabold text-green-600 text-4xl ml-1">
                  {localStorage.getItem("MaiorScore")}
                </strong>
              </h2>
            </div>
          </div>
          <div className="row">
            <a href="/dev">
              <button className="bg-green-600 scale-100 hover:scale-110 transition-all duration-300 p-4 rounded-3xl mt-8 shadow-lg hover:shadow-xl">
                <h2 className="text-neutral-700 text-2xl sm:text-3xl font-extrabold dark:text-neutral-300">
                  Jogar novamente
                </h2>
              </button>
            </a>
          </div>
          <div className="inline-flex">
            <div className="col-auto">
              <TwitterShareButton
                className="group"
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
                  className="text-green-600 bg-black-600 scale-100 hover:scale-110 transition-all duration-300 p-4 rounded-3xl mx-2 mt-8 hover:shadow-2xl"
                  size={80}
                />
                <div
                  id="twitter"
                  className="scale-0 font-bold group-hover:scale-100 transition-all duration-300 bg-green-600 mt-6 text-neutral-700 py-2 px-2 rounded-xl shadow-md justify-center"
                >
                  Twitter
                </div>
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
                    className="scale-0 font-bold group-hover:scale-100 transition-all duration-300 bg-green-600 mt-6 text-neutral-700 py-2 rounded-xl shadow-md"
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
        setNPergunta(nPegunta + 1);
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

  useEffect(
    () => {
      gameStart();
    }, //repeat every time i click the card
    []
  );

  const x = useMotionValue(0);
  const xInput = [
    window.innerWidth * 0.25,
    window.innerWidth * 0.5,
    window.innerWidth * 0.75,
  ];
  const cor = useTransform(x, xInput, [
    "--tw-shadow-color: #dc2626",
    "--tw-shadow-color: #f8f8f8",
    "--tw-shadow-color: #16a34a",
  ]);

  const animar = useAnimation();

  const gameStart = async () => {
    animar.start({
      x: [0, -150, 0, 150, 0],
      transition: {
        duration: 2.5,
        ease: "easeInOut",
      },
    });
  };

  const animando = async () => {
    animar.start({
      //make a shake animation
      x: [0, -20, 0, 20, 0, -15, 0, 15, 0, -10, 0, 10, 0, -5, 0, 5, 0],
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    });
  };

  const opacity = useTransform(
    x,
    [
      window.innerWidth * 0.25,
      window.innerWidth * 0.5,
      window.innerWidth * 0.75,
    ],
    [0, 1, 0]
  );

  const handleClickFalso = () => {
    x.set(window.innerWidth * 0.25);
    handleFalso();
  };

  const handleClickVerdadeiro = () => {
    x.set(window.innerWidth * 0.75);
    handleVerdadeiro();
  };

  const mudaCor = () => {
    if (x.get() === window.innerWidth * 0.5) {
      document.getElementById("card").style.boxShadow =
        "0px 10px 15px -3px rgb(64, 64, 64)";
    }
    if (x.get() < window.innerWidth * 0.5) {
      document.getElementById("card").style.boxShadow =
        "0px 10px 15px -3px rgb(220, 38, 38)";
    }
    if (x.get() > window.innerWidth * 0.5) {
      document.getElementById("card").style.boxShadow =
        "0px 10px 15px -3px rgb(22, 163, 74)";
    }
  };

  return (
    <>
      <div className={isActive ? "dark" : "white"}>
        <div className="bg-neutral-300 absolute h-full w-full dark:bg-neutral-700 transition-colors duration-1000">
          <div id="vidas">
            <Vidas vidas={vidas} />
          </div>
          <div
            className="mt-[12%] md:mt-[8%] lg:mt-[4%] xl:mt-[3%] inline-flex w-full justify-center"
            id="pontos"
          >
            <IoMdTrophy className="text-green-600" size={85} />
            <h2>
              <strong className="bebasGrudado ml-4 text-8xl font-bold text-neutral-900">
                {ponto}
              </strong>
            </h2>
          </div>
          <div id="game" ref={game}>
            <div class="center">
              <motion.div
                id="card"
                animate={animar}
                className="property-card transition-all duration-700"
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                onDrag={(e, info) => {
                  x.set(info.point.x);
                  mudaCor();
                }}
                onDragEnd={(e, info) => {
                  if (
                    info.point.x > window.innerWidth * 0.25 &&
                    info.point.x < window.innerWidth * 0.75
                  ) {
                    x.set(window.innerWidth * 0.5);
                    mudaCor();
                  }
                  if (info.point.x >= (window.innerWidth * 3) / 4) {
                    handleVerdadeiro();
                    x.set(window.innerWidth * 0.5);
                    mudaCor();
                  }
                  if (info.point.x <= (window.innerWidth * 1) / 4) {
                    handleFalso();
                    x.set(window.innerWidth * 0.5);
                    mudaCor();
                  }
                }}
              >
                <div className={"property-image"} id="imagem">
                  <div class="property-image-title">
                    {/* <!-->Card Title</h5> If you want it, turn on the CSS also. --> */}
                  </div>
                </div>
                <div class="property-description">
                  <h5 className="dark:text-slate-200">Pergunta {nPegunta}</h5>
                  <p className="dark:text-slate-300 md:text-lg">{questao} </p>
                </div>
              </motion.div>
            </div>
          </div>
          <div
            className="left-[50%] -translate-x-[50%] -translate-y-[90%] top-[90%] absolute inline-flex"
            id="botoes"
          >
            <button
              className=" bg-gray-200 shadow-lg dark:bg-neutral-800 hover:scale-110 hover:text-red-600 text-neutral-600 font-bold mb-2 mx-4 py-3 px-4 rounded-full transition-all duration-500"
              onClick={handleClickFalso}
            >
              <BsXLg size={17} />
            </button>
            <button
              className=" bg-gray-200 shadow-lg dark:bg-neutral-800 hover:scale-110 hover:text-green-600 transition-all duration-500 text-neutral-600 font-bold mb-2 mx-4 py-3 px-4 rounded-full "
              onClick={handleClickVerdadeiro}
            >
              <BsCheckLg size={17} />
            </button>
          </div>

          <footer className="left-[50%] -translate-x-[50%] -translate-y-[95%] top-[95%] absolute font-extrabold  text-neutral-700 text-xl dark:text-neutral-300 duration-1000">
            Fut<strong className="text-green-600">Quiz</strong>
          </footer>
        </div>
      </div>
    </>
  );
}

export default GameSimple;
