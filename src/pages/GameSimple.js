import { React, useEffect, useState } from "react";
import perguntas from "../Futquiz.json";

function GameSimple() {
  const [aleatorio, setAleatorio] = useState(0);
  const [ponto, setPonto] = useState(0);
  const [questao, setQuestao] = useState("");

  const handleFalso = () => {
    if (perguntas[aleatorio].resposta === "F") {
      console.log("Você acertou!");
      setPonto(ponto + 1);
    } else {
      console.log("Você errou!");
    }
    geraQuestao();
  };

  const handleVerdadeiro = () => {
    if (perguntas[aleatorio].resposta === "V") {
      console.log("Você acertou!");
      setPonto(ponto + 1);
    } else {
      console.log("Você errou!");
    }
    geraQuestao();
  };

  const geraQuestao = () => {
    //random number beetwen 0 and the length of the array
    const random = Math.floor(Math.random() * perguntas.length);
    setAleatorio(random);
    setQuestao(perguntas[random].pergunta);
  };

  useEffect(() => {
    geraQuestao();
  }, []);

  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
      <h1>Game FUTQUIZ dev</h1>

      <div>{ponto}</div>

      <div>
        <h1>{questao}</h1>
      </div>

      <div className="place-content-between">
        <button
          class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded text-center"
          onClick={handleVerdadeiro}
        >
          Correto
        </button>
        <button
          class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded text-center"
          onClick={handleFalso}
        >
          Errado
        </button>
      </div>
    </div>
  );
}

export default GameSimple;
