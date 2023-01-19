import React from "react";
import "./Calculator.css";
import { CalcButton } from "../../components/CalcButton/CalcButton";

export const Calculator = () => {
  return (
    <div className="calc-container">
      <div className="calc-text_container">
        <input type="text" className="calc-operations" />
      </div>
      <div className="calc-button_container">
        <CalcButton tipo="funcion" valor="AC"></CalcButton>
        <CalcButton tipo="funcion" valor="CE"></CalcButton>
        <CalcButton tipo="operacion" valor="%"></CalcButton>
        <CalcButton tipo="operacion" valor="÷"></CalcButton>
        <CalcButton tipo="numero" valor="7"></CalcButton>
        <CalcButton tipo="numero" valor="8"></CalcButton>
        <CalcButton tipo="numero" valor="9"></CalcButton>
        <CalcButton tipo="operacion" valor="x"></CalcButton>
        <CalcButton tipo="numero" valor="4"></CalcButton>
        <CalcButton tipo="numero" valor="5"></CalcButton>
        <CalcButton tipo="numero" valor="6"></CalcButton>
        <CalcButton tipo="operacion" valor="-"></CalcButton>
        <CalcButton tipo="numero" valor="1"></CalcButton>
        <CalcButton tipo="numero" valor="2"></CalcButton>
        <CalcButton tipo="numero" valor="3"></CalcButton>
        <CalcButton tipo="operacion2" valor="+"></CalcButton>
        <CalcButton tipo="numero" valor="0"></CalcButton>
        <CalcButton tipo="numero" valor="."></CalcButton>
        <CalcButton tipo="numero" valor="="></CalcButton>
      </div>
    </div>
  );
};
