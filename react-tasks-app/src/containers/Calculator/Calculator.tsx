import React from 'react'
import "./Calculator.css"
import { CalcButton } from '../../components/CalcButton/CalcButton'

export const Calculator = () => {
  return (
    <div className="calc-container">
      <div className="calc-text_Container">

      </div>
      <div className="calc-button_container">
        <CalcButton tipo="numero" valor='1'></CalcButton>
        <CalcButton tipo="operacion" valor='+'></CalcButton>
      </div>
    </div>
  )
}
