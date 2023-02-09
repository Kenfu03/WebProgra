import React, { useState } from "react";
import "./Calculator.css";
import "./CalcButton/CalcButton.css";

interface buttonsTypers {
  tipo: string;
  valor: string;
  color?: string;
}

export const Calculator = () => {
  const [buttons, setButtons] = useState([
    { tipo: "funcion", valor: "AC" },
    { tipo: "funcion", valor: "CE" },
    { tipo: "operacion", valor: "%" },
    { tipo: "operacion", valor: "/" },
    { tipo: "numero", valor: "7" },
    { tipo: "numero", valor: "8" },
    { tipo: "numero", valor: "9" },
    { tipo: "operacion", valor: "*" },
    { tipo: "numero", valor: "4" },
    { tipo: "numero", valor: "5" },
    { tipo: "numero", valor: "6" },
    { tipo: "operacion", valor: "-" },
    { tipo: "numero", valor: "1" },
    { tipo: "numero", valor: "2" },
    { tipo: "numero", valor: "3" },
    { tipo: "operacion", valor: "+" },
    { tipo: "numero2", valor: "0" },
    { tipo: "numero", valor: "." },
    { tipo: "funcion", valor: "=" },
  ]);
  const [resetAll, setResetAll] = useState(false);
  const [firstVal, setFirstVal] = useState("");
  const [ope, setOpe] = useState("");
  const [value, setValue] = useState("");

  const defaultColor: string = "#1d3126";

  const calcFunctions = (valor: string) => {
    if (valor === "AC") {
      if (resetAll || firstVal === "") {
        setValue("");
        setFirstVal("");
        setResetAll(false);
      } else if (firstVal !== "") {
        setValue(firstVal);
        setResetAll(true);
      }
      setOpe("");
    } else if (valor === "CE") {
      value.length >= 1 && setValue(value.slice(0, -1));
    } else {
      if (value === "") {
        setValue("Faltan Datos");
      } else if (firstVal === "") {
        setFirstVal(value);
        setValue("");
      } else {
        setValue(eval(firstVal + ope + value));
        setFirstVal("");
        setOpe("");
      }
    }
  };

  const calcOperations = (valor: string) => {
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
        setValue(valor);
      } else {
        setResetAll(false);
        setValue(value + valor);
      }
    }
  };

  function CalcButtons(props: any) {
    const botones = buttons;
    return (
      <div className="calc-button_container">
        {botones.map((e) => (
          <button
            className={e.tipo}
            onClick={() => {
              calc(e.tipo, e.valor);
            }}
          >
            {e.valor}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="calc">
      <div className="calc-container">
        <input
          type="text"
          id="texto1"
          className="calc-operations"
          onChange={(e) =>
            calc("numero", e.target.value.charAt(e.target.value.length - 1))
          }
          value={value}
        />
        <CalcButtons buttons={buttons} />
      </div>
    </div>
  );
};
