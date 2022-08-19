import React, { Component, useState } from "react";
import App from "../App";
import "./Imc.css";
const faltura = (a, setA) => {
  return (
    <div>
      <label>Altura: </label>
      <input
        type="number"
        min="0"
        value={a}
        onChange={(e) => {
          Number(setA(e.target.value));
        }}
      />
    </div>
  );
};

const fpeso = (p, setP) => {
  return (
    <div>
      <label>Peso: </label>
      <input
        type="number"
        min="0"
        value={p}
        onChange={(e) => {
          Number(setP(e.target.value));
        }}
      />
    </div>
  );
};
const fcalcular = (p, a, setResult) => {
  const calc = () => {
    setResult(p / (a * a));
  };
  return (
    <div>
      <button onClick={calc}>Calcular</button>
    </div>
  );
};

const fresultado = (r, s) => {
  if (r <= 18.5) {
    s = <strong>Você está abaixo do peso normal!</strong>;
  } else if (r > 18.5 && r < 24.9) {
    s = "Você está no peso ideal.";
  } else if (r > 25 && r < 29.9) {
    s = <strong>Você está com excesso de peso!</strong>;
  } else if (r > 30 && r < 34.9) {
    s = <strong>Obesidade Classe I</strong>;
  } else if (r > 35 && r < 39.9) {
    s = <strong> Obesidade Classe II</strong>;
  } else if (r >= 40) {
    s = <strong> Obesidade Classe III</strong>;
  }
  if (r == 0) {
    s = "";
  }
  return (
    <div>
      <p>
        Resultado:<h3>{Number(r).toFixed(2)}</h3>
      </p>
      <br />
      <p>Classificação segundo a OMS a partir do IMC: </p>
      {s}
    </div>
  );
};

export default function Imc() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [saude, setSaude] = useState("");

  return (
    <div className="main">
      <h1>Calculadora IMC</h1>
      <div className="inputs">
        {faltura(altura, setAltura)}
        {fpeso(peso, setPeso)}
        {fcalcular(peso, altura, setResultado)}
      </div>
      <div className="resultado">{fresultado(resultado, setSaude)}</div>
    </div>
  );
}
