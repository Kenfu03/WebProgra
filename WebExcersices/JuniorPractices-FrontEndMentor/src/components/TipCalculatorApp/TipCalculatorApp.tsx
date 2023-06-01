import "./TipCalculatorApp.css";
import logo from "./images/logo.svg";
import dollar from "./images/icon-dollar.svg";
import person from "./images/icon-person.svg";
import { useState } from "react";

const TipCalculatorApp = () => {
  const buttonsValues: string[] = ["5%", "10%", "15%", "25%", "50%"];
  const [bill, setBill] = useState<number>();
  const [persons, setPersons] = useState<number>();
  const [personResult, setPersonResult] = useState<number>(0);
  const [totalResult, setTotalResult] = useState<number>(0);
  const [porcentaje, setPorcentaje] = useState<number>(0);

  const allowOnlyNumbers = (inputElement: HTMLInputElement) => {
    const billInput = inputElement.getAttribute("id") === "billInput";
    const personInput = inputElement.getAttribute("id") === "personInput";

    if (billInput) {
			console.log(validateInput(inputElement.value))
      const validateNumber:string = validateInput(inputElement.value)
        ? inputElement.value
        : bill + "";
      setBill(+validateNumber);
      
    }
		console.log(bill);
  };

  const validateInput = (value: string): boolean => {
    return /^\d*\.?\d*$/.test(value);
  };

  return (
    <div className="principal-container">
      <img src={logo} alt="logo" />
      <div className="tipApp-container">
        <div className="form">
          <div className="bill">
            <h1>Bill</h1>
            <div className="specialInput">
              <input
                type="text"
                placeholder="0"
                id="billInput"
                value={bill}
                onChange={(e) => allowOnlyNumbers(e.target)}
              />
              <img src={dollar} alt="$ simbol" />
            </div>
          </div>
          <div className="selectTip">
            <h1>Select Tip %</h1>
            <div className="optionsTip-container">
              {buttonsValues.map((item: string, i: number) => (
                <button
                  className="defaultButton"
                  key={i}
                  onClick={() => setPorcentaje(+item.slice(0, item.length - 1))}
                >
                  {item}
                </button>
              ))}
              <input type="text" value={porcentaje} readOnly />
            </div>
          </div>
          <div className="personNumber">
            <h1>Number of People</h1>
            <div className="specialInput">
              <input
                type="text"
                placeholder="0"
                id="personInput"
                value={persons}
                onChange={(e) =>
                  (e.target.value = e.target.value.replace(/[^0-9.]/g, ""))
                }
              />
              <img src={person} alt="person simbol" />
            </div>
          </div>
        </div>

        <div className="result">
          <h1 className="tittleResult">
            Tip Amount <span>/ person</span>
          </h1>
          <h1 className="finalResult">${personResult}</h1>
          <h1 className="tittleResult">
            Total <span>/ tip</span>
          </h1>
          <h1 className="finalResult">${totalResult}</h1>
          {totalResult !== 0 && <button>RESET</button>}
        </div>
      </div>
    </div>
  );
};

export default TipCalculatorApp;
