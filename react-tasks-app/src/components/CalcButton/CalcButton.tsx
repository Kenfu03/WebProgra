import React from 'react'
import "./CalcButton.css"


interface buttonTypers {
tipo: string;
valor: string;
}

export function CalcButton(props: buttonTypers) {
    return(
        <button className={props.tipo}>{props.valor}</button>
    )
}
