import React from "react";
import "./Calculator.css";
import "./CalcButton.css";

const botones: string[][] = [
  ["AC", "funcion"],
  ["CE", "funcion"],
  ["%", "operacion"],
  ["÷", "operacion"],
  ["7", "numero"],
  ["8", "numero"],
  ["9", "numero"],
  ["x", "operacion"],
  ["4", "numero"],
  ["5", "numero"],
  ["6", "numero"],
  ["-", "operacion"],
  ["1", "numero"],
  ["2", "numero"],
  ["3", "numero"],
  ["+", "operacion"],
  ["0", "numero2"],
  [".", "numero"],
  ["=", "funcion"],
  
]

interface buttonTypers {
  tipo: string;
  valor: string;
}



let dat: string = "";
let firstNum: number;
let secondNum: number;
let ope: string = "";
let result: string;

const addNumber = (dato: string, type: string) => {
  let element = document.getElementById("texto1");
  console.log(element);

  if (element) {
    element.textContent = dat;
  }

  if (type === "funcion") {
    if (dato === "=") {
      secondNum = Number(dat);
      calcOperation(firstNum, secondNum, ope);
    } else if (dato === "AC") {
      dat = "";
      firstNum = 0;
      secondNum = 0;
      ope = "";
    } else {
      dat = "";
    }
  } else if (type === "operacion") {
    firstNum = Number(dat);
    dat = "";
    ope = dato;
  } else {
    dat = dat.concat(dato);
  }
};

const calcOperation = (firstNum: Number, secondNum: Number, ope: string) => {
  result = firstNum + ope.replace(/"/g, "") + secondNum;
  console.log(result.replace(/"/g, ""));
};

function CalcButton(props: buttonTypers) {
  return (
    <button
      className={props.tipo}
      onClick={() => addNumber(props.valor, props.tipo)}
    >
      {props.valor}
    </button>
  );
}

export const Calculator = () => {
  return (
    <div className="calc">
      <div className="calc-left_side"></div>
      <div className="calc-botton_side"></div>
      <div className="calc-container">
        <div className="calc-text_container">
          <p id="texto1"></p>
        </div>

        <div className="calc-button_container">
          {
            botones.forEach(ele => console.log(ele))};
          {/* <input type="text" id="texto1" className="calc-operations"/> */}
          {/* <CalcButton tipo="funcion" valor="AC"></CalcButton>
          <CalcButton tipo="funcion" valor="CE"></CalcButton>
          <CalcButton tipo="operacion" valor="%"></CalcButton>
          <CalcButton tipo="operacion" valor="÷"></CalcButton>
          <CalcButton tipo="numero" valor="7"></CalcButton>
          <CalcButton tipo="numero" valor="8"></CalcButton>
          <CalcButton tipo="numero" valor="9"></CalcButton>
          <CalcButton tipo="operacion" valor="x"></CalcButton>
          <CalcButton tipo="numero" valor="4"></CalcButton>
          <CalcButton tipo="numero" valor="5"></CalcButton>
          <CalcButton tipo="numero" valor="6"></CalcButton>
          <CalcButton tipo="operacion" valor="-"></CalcButton>
          <CalcButton tipo="numero" valor="1"></CalcButton>
          <CalcButton tipo="numero" valor="2"></CalcButton>
          <CalcButton tipo="numero" valor="3"></CalcButton>
          <CalcButton tipo="operacion" valor="+"></CalcButton>
          <CalcButton tipo="numero2" valor="0"></CalcButton>
          <CalcButton tipo="numero" valor="."></CalcButton>
          <CalcButton tipo="funcion" valor="="></CalcButton> */}
        </div>
      </div>
    </div>
  );
};
