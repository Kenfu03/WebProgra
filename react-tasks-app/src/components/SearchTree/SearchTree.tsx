import React, { useRef, useState } from "react";
import "./SearchTree.css";
import { DecorationDiv } from "../../containers";

type FormElement = React.FormEvent<HTMLFormElement>;

interface iCategorys {
  name: string;
  child?: iCategorys[];
}

export const SearchTree = () => {
  const taskInput = useRef<HTMLInputElement>(null);

  const [switchInfo, setSwitchInfo] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const [newSubCategory, setNewSubCategory] = useState("");
  const [categorys, setCategorys] = useState<iCategorys[]>([]);

  const changeData = () => {
    setSwitchInfo(!switchInfo);
  };

  const addE = (e: FormElement) => {
    e.preventDefault();
    addCategory(newCategory, newSubCategory);
    setNewCategory("");
  };

  const addCategory = (name: string, children: string) => {
    if (newCategory !== "") {
      if (newSubCategory !== "") {
        const newCategorys: iCategorys[] = [...categorys, { name, [ children ] }];
        setCategorys(newCategorys);
      } else {
        const newCategorys: iCategorys[] = [...categorys, { name }];
        setCategorys(newCategorys);
      }
    }
  };

  const addDatos_input = () => {
    return (
      <input
        type="text"
        onChange={(e) => setNewSubCategory(e.target.value)}
        value={newSubCategory}
        placeholder="SubCategory"
      />
    );
  };

  const addDatosContainer = () => {
    return (
      <div className="addDatos-container">
        <form onSubmit={addE}>
          <input
            type="text"
            onChange={(e) => setNewCategory(e.target.value)}
            value={newCategory}
            placeholder="Category"
          />
          {newCategory !== "" && addDatos_input()}
          <button onClick={() => addE}>Agregar Category</button>
        </form>
      </div>
    );
  };

  const infoTreeContainer = () => {
    return (
      <div className="infoTree-container">
        {categorys.map((t: iCategorys, i: number) => (
          <button className="infoTree-item">
            <DecorationDiv firstCo="#a88c43" />
            {t.name}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="SearchTree-container">
      <button
        className="ChangeDiv"
        onClick={() => {
          changeData();
        }}
      >
        {switchInfo ? "Agregar / Eliminar" : "Arbol de busqueda"}
      </button>
      {switchInfo ? addDatosContainer() : infoTreeContainer()}
    </div>
  );
};
