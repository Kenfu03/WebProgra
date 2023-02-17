import React, { Children, useState } from "react";
import "./SearchTree.css";

const files: TEntry = {
  children: [
    {
      name: "Extremo Park",
      children: [
        {
          name: "Canopy",
          children: [
            {
              name: "Extranjero",
            },
            {
              name: "Nacional",
            },
            {
              name: "Niño",
            },
            {
              name: "Estudiante",
            },
          ],
        },
        {
          name: "Bungee",
        },
        {
          name: "Mega Tarzan Swing",
        },
      ],
    },
    {
      name: "Selvatura Park",
      children: [
        {
          name: "Canopy",
        },
        {
          name: "Puentes",
        },
      ],
    },
    {
      name: "100% Aventura",
    },
  ],
  name: ""
};

type TEntry = {
  name: string;
  children?: TEntry[];
  // valor: string;
};

type FormElement = React.FormEvent<HTMLFormElement>;

function Entry({ entry, depth }: { entry: TEntry; depth: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="items">
      {entry.children ? (
        <button onClick={() => setIsExpanded(!isExpanded)}>
          <p className="pSign gradient__text">{isExpanded ? " - " : " + "}</p>
          {entry.name}
        </button>
      ) : (
        <div>{entry.name}</div>
      )}

      {isExpanded && (
        <div style={{ paddingLeft: `${depth * 30}px` }}>
          {entry.children?.map((entry) => (
            <Entry entry={entry} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}



function SearchTree() {
  return (
    <div className="search__container section__margin">
      <div className="tree__item">
        {files.children.map((entry) => (
          <Entry entry={entry} depth={1} />
        ))}
      </div>
    </div>
  );
}

export default SearchTree;
