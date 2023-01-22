import React from "react";
import "./CalcButton.css";
import { Calculator } from "../../containers";


interface buttonTypers {
  tipo: string;
  valor: string;
}

let dat: string = "";
let firstNum: number = 0;
let secondNum: number = 0;
let ope:string = "";
let result:number;


const addNumber = (dato: string, type:string ) => {
  if (dato === "=") {
    secondNum = Number(dat)
    if (ope === "+") {
      result = (firstNum + secondNum)
      console.log(result.toString())
    }
    }

  else if (type === "operacion"){
    firstNum = Number(dat)
    dat=""
    ope = dato
  }
  else {
    dat = dat.concat(dato)
  }
};

const calcOperation = () => {};

export function CalcButton(props: buttonTypers) {
  return (
    <button className={props.tipo} onClick={() => addNumber(props.valor, props.tipo)}>
      {props.valor}
    </button>
  );
}
