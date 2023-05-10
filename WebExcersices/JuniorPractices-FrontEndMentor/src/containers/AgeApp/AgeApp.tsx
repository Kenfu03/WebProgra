import { useState } from "react";
import "./AgeApp.css";
import btnImage from "./assets/images/icon-arrow.svg";

const AgeApp = () => {
  const date:Date = new Date();
  let maxDays:number = 31;
  const actualDay:number = date.getDate();
  const actualMonth:number = date.getUTCMonth()+1;
  const actualYear:number = date.getFullYear();


  const verifyContent = (inputData: HTMLInputElement) => {
    if (
      inputData.getAttribute("id") === "dayInput" ||
      inputData.getAttribute("id") === "monthInput"
    ) {
      if (inputData.value.length === 1) {
        inputData.value = "0" + inputData.value;
      } else {
        if (inputData.value[0] === "0") {
          inputData.value = inputData.value[1] + inputData.value[2];
        }
        inputData.value = inputData.value.slice(0, 2);
        if (inputData.getAttribute("id") === "dayInput") {
          if (+inputData.value > maxDays) {
            inputData.value = maxDays + "";
          } else if (+inputData.value < 0) {
            inputData.value = "00";
          }
        } else if (inputData.getAttribute("id") === "monthInput") {
          for (let i:number=1;i<=12;i++){
            if (+inputData.value === 2){

            }
          }
          if (+inputData.value > 12) {
            inputData.value = "12";
          } else if (+inputData.value < 0) {
            inputData.value = "00";
          }
        }
      }
    } else if (inputData.getAttribute("id") === "yearInput") {
      inputData.value = inputData.value.slice(0, 4);
      if (+inputData.value > actualYear){
        inputData.value = actualYear + "";
      }
    }
  };

  return (
    <div className="ageApp-container">
      <div className="inputDate-container">
        <p>DAY</p>
        <p>MONTH</p>
        <p>YEAR</p>
        <input
          type="number"
          name=""
          id="dayInput"
          placeholder="DD"
          onChange={(e) => verifyContent(e.target)}
        />
        <input
          type="number"
          name=""
          id="monthInput"
          placeholder="MM"
          onChange={(e) => verifyContent(e.target)}
        />
        <input
          type="number"
          name=""
          id="yearInput"
          placeholder="YYYY"
          onChange={(e) => verifyContent(e.target)}
        />
        <p className="warning" id="dayWarning">
          This field is required
        </p>
        <p className="warning" id="monthWarning">
          This field is required
        </p>
        <p className="warning" id="yearWarning">
          This field is required
        </p>
      </div>
      <div className="btn-container">
        <div className="line"></div>
        <button>
          <img src={btnImage} alt="arrowButton" />
        </button>
      </div>
      <div className="resultDate-container">
        <h1 className="years">
          <p>{actualYear}</p> years
        </h1>
        <h1 className="months">
          <p>{actualMonth}</p> months
        </h1>
        <h1 className="days">
          <p>{actualDay}</p> days
        </h1>
      </div>
    </div>
  );
};

export default AgeApp;
