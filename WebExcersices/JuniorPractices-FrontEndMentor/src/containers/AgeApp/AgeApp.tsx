import { useState } from "react";
import "./AgeApp.css";
import btnImage from "./assets/images/icon-arrow.svg";

const AgeApp = () => {
  let years: string = "38";
  let months: string = "3";
  let days: string = "26";
  let month: number = 0;
  const [dayWarning, setDayWarning] = useState<string>("");
  const [monthWarning, setmonthWarning] = useState<string>("");
  const [yearWarning, setyearWarning] = useState<string>("");

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
          if (+inputData.value > 31) {
            inputData.value = "31";
          } else if (+inputData.value < 0) {
            inputData.value = "00";
          }
        } else if (inputData.getAttribute("id") === "monthInput") {
          if (+inputData.value > 12) {
            inputData.value = "12";
          } else if (+inputData.value < 0) {
            inputData.value = "00";
          }
        }
      }
    } else if (inputData.getAttribute("id") === "yearData") {
      inputData.value = inputData.value.slice(0, 4);
      console.log("ano");
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
          <p>{years}</p> years
        </h1>
        <h1 className="months">
          <p>{months}</p> months
        </h1>
        <h1 className="days">
          <p>{days}</p> days
        </h1>
      </div>
    </div>
  );
};

export default AgeApp;
