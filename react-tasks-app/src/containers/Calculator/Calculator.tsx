import React, { useState } from "react";
import "./Calculator.css";
import "./CalcButton/CalcButton.css";

interface buttonsTypers {
  tipo: string;
  valor: string;
}


export const Calculator = () => {

  const [value, setValue] = useState("");

  const calcFunctions = (valor:string) => {
    if (valor === "AC"){
      setValue("")
    }
    if (valor === "CE"){

    }
  }

  const calc = (tipo:string, valor:string) => {
    if (tipo === "funcion"){
      calcFunctions(valor)
    }
  }

  const deleteAll = (): void => {
    setValue("")
  }

  function CalcButton2({onPress}:HTMLInputElement) {

    return (
      <button
        onClick={onPress}
      >
        2
      </button>
    );
  }

  function CalcButton(props: buttonsTypers) {

    return (
      <button
        className={props.tipo}
        onClick={() => calc(props.tipo, props.valor); props.tipo === "funcion"  && calcFunctions(props.valor)}
      >
        {props.valor}
      </button>
    );
  }

  return (
    <div className="calc">
      <div className="calc-left_side"></div>
      <div className="calc-botton_side"></div>
      <div className="calc-container">
        <input
          type="text"
          id="texto1"
          className="calc-operations"
          value={value}
        />
        <div className="calc-button_container">
          <CalcButton2 onPress={calc("funcion", "AC")}></CalcButton2>
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
          <CalcButton tipo="funcion" valor="="></CalcButton>
        </div>
      </div>
    </div>
  );
};
