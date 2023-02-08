import React, { useState } from "react";
import "./Calculator.css";
import "./CalcButton/CalcButton.css";

interface buttonsTypers {
  tipo: string;
  valor: string;
  color?: string;
}

export const Calculator = () => {
  const [ChangeColor, setChangeColor] = useState(false);
  const [firstVal, setFirstVal] = useState("");
  const [ope, setOpe] = useState("");
  const [value, setValue] = useState("");

  const defaultColor:string = "#1d3126";

  const calcFunctions = (valor: string) => {
    if (valor === "AC") {
      setChangeColor(false);
      setValue("");
    } else if (valor === "CE") {
      value.length >= 1 && setValue(value.slice(0, -1));
    } else {
      if (value === ""){
        setValue("Faltan Datos")
        
      }
      else if (firstVal === ""){
        setFirstVal(value)
        setValue("")
      }
      else {
        setValue(eval(firstVal + ope + value));
        setFirstVal("");
        setOpe("")
      }
    }
  };

  const calcOperations = (valor: string) => {
    setChangeColor(!ChangeColor)
    if (ope === "") {
      setOpe(valor);
      setFirstVal(value);
      setValue("");
    } else {
      setOpe(valor);
    }
    
  };

  const calc = (tipo: string, valor: string) => {
    if (tipo === "funcion") {
      calcFunctions(valor);
    } else if (tipo === "operacion") {
      calcOperations(valor);
    } else {
      if (value === "Faltan Datos") {
        setValue(valor)
      } else {
        setValue(value + valor);
      }
    }
  };

  function CalcButton(props: buttonsTypers) {
    return (
      <button
        className={ChangeColor? "operacion2":props.tipo }
        onClick={() => {
          calc(props.tipo, props.valor)
          }}
      >
        {props.valor}
      </button>
    );
  }

  return (
    <div className="calc">
      <div className="calc-container">
        <input
          type="text"
          id="texto1"
          className="calc-operations"
          onChange={(e) => calc("numero", e.target.value.charAt(e.target.value.length-1))}
          value={value}
        />
        <div className="calc-button_container">
          <CalcButton tipo="funcion" valor="AC"></CalcButton>
          <CalcButton tipo="funcion" valor="CE"></CalcButton>
          <CalcButton tipo="operacion" valor="%" color="white"></CalcButton>
          <CalcButton tipo="operacion" valor="/" color="white"></CalcButton>
          <CalcButton tipo="numero" valor="7"></CalcButton>
          <CalcButton tipo="numero" valor="8"></CalcButton>
          <CalcButton tipo="numero" valor="9"></CalcButton>
          <CalcButton tipo="operacion" valor="*" color="white"></CalcButton>
          <CalcButton tipo="numero" valor="4"></CalcButton>
          <CalcButton tipo="numero" valor="5"></CalcButton>
          <CalcButton tipo="numero" valor="6"></CalcButton>
          <CalcButton tipo="operacion" valor="-" color="white"></CalcButton>
          <CalcButton tipo="numero" valor="1"></CalcButton>
          <CalcButton tipo="numero" valor="2"></CalcButton>
          <CalcButton tipo="numero" valor="3"></CalcButton>
          <CalcButton tipo="operacion" valor="+" color="white"></CalcButton>
          <CalcButton tipo="numero2" valor="0"></CalcButton>
          <CalcButton tipo="numero" valor="."></CalcButton>
          <CalcButton tipo="funcion" valor="="></CalcButton>
        </div>
      </div>
    </div>
  );
};
