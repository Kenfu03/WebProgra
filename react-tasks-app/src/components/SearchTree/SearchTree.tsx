import React, { useRef, useState } from "react";
import "./SearchTree.css";
import { DecorationDiv } from "../../containers";

type FormElement = React.FormEvent<HTMLFormElement>;

interface iCategorys {
  name: string;
}

export const SearchTree = () => {
  const taskInput = useRef<HTMLInputElement>(null);
  
  const [switchInfo, setSwitchInfo] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const [categorys, setCategorys] = useState<iCategorys[]>([]);

  const changeData = () => {
    setSwitchInfo(!switchInfo);
  };

  const addE = (e: FormElement) => {
    console.log(newCategory);
    e.preventDefault();
    addCategory(newCategory);
    setNewCategory("");
  };

  const addCategory = (name: string) => {
    const newCategorys: iCategorys[] = [...categorys, { name }];
    setCategorys(newCategorys);
  };

  const addDatosContainer = () => {
    return (
      <div className="addDatos-container">
        <form onSubmit={addE}>
          <input type="text" onChange={(e) => setNewCategory(e.target.value)} value={newCategory} />
          <button onClick={() => addE}>Agregar Category</button>
        </form>
      </div>
    );
  };

  const infoTreeContainer = () => {
    return (
      <div className="infoTree-container">
        {categorys.map((t: iCategorys, i: number) => (
          <div key={i}>
            <button>
              <DecorationDiv firstCo="#a88c43" />
              <h1>{t.name}</h1>
            </button>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="SearchTree-container">
      <button className="ChangeDiv"
        onClick={() => {
          changeData();
        }}
      >
        {switchInfo ? "Agregar Items" : "Arbol de busqueda"}
      </button>
      {switchInfo ? addDatosContainer() : infoTreeContainer()}
    </div>
  );
};
