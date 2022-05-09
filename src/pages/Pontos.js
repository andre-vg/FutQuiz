import React from "react";

function Pontos(props) {
  const { ponto } = props;
  let pontuacao = 0;
  if (ponto === 1) {
    pontuacao += 1;
  } else if (ponto === 0) {
    pontuacao += 0;
  }

  return <div>{pontuacao}</div>;
}

export default Pontos;
