import React, { useState } from "react";
import "./SearchTree.css";

type FormElement = React.FormEvent<HTMLFormElement>;

export const SearchTree = () => {
  const [switchInfo, setSwitchInfo] = useState(false);
  const [newEmpresa, setNewEmpresa] = useState("")

  const changeData = () => {
    setSwitchInfo(!switchInfo);
  };

  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    // addTask(newEmpresa);
    setNewEmpresa("");
  };

  // const addTask = (name: string) => {
  //   const newTasks: iTask[] = [...tasks, { name, done: false }];
  //   setTasks(newTasks);
  // };

  const addDatos = () => {
    return <div className="addDatos-container">
      <input type="text" placeholder="Empresa"/>
      <button>Agregar Empresa</button>
    </div>;
  };

  const infoTree = () => {
    return (
      <div className="infoTree-container">
        <h1>me kago en todo</h1>
      </div>
    )
  }

  return (
    <div className="SearchTree-container">
      <button
        onClick={() => {
          changeData();
        }}
      >
        {switchInfo ? "Agregar Items" : "Arbol de busqueda"}
      </button>
      {switchInfo ? addDatos() : infoTree()}
    </div>
  );
};
