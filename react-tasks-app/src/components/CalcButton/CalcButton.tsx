import React from "react";
import "./CalcButton.css";
import "../../containers/Calculator/Calculator";
import { Calculator} from "../../containers/Calculator/Calculator";


interface buttonTypers {
  tipo: string;
  valor: string;
}

let dat: string = "";
let firstNum: number = 0;
let secondNum: number = 0;
let ope:string = "";
let result:string;


const addNumber = (dato: string, type:string ) => {
  if (dato === "=") {
    secondNum = Number(dat)
    calcOperation(firstNum, secondNum, ope)
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

const calcOperation = (firstNum:Number, secondNum:Number, ope:string) => {
  result = (firstNum + ope.replace(/"/g, "") + secondNum)
  console.log(result.replace(/"/g, ""))
};

export function CalcButton(props: buttonTypers) {
  return (
    <button className={props.tipo} onClick={() => addNumber(props.valor, props.tipo)}>
      {props.valor}
    </button>
  );
}
