import "./TipCalculatorApp.css";
import logo from "./images/logo.svg";
import dollar from "./images/icon-dollar.svg";
import person from "./images/icon-person.svg";
import { useState } from "react";

const TipCalculatorApp = () => {
  const buttonsValues: string[] = ["5%", "10%", "15%", "25%", "50%"];
  const [bill, setBill] = useState<number>();
  const [persons, setPersons] = useState<number>();
  const [porcentage, setPorcentage] = useState<number>(0);

  const validateInputs = (inputElement: HTMLInputElement) => {
    const billInput: boolean = inputElement.getAttribute("id") === "billInput";

    if (billInput) {
      inputElement.value = inputElement.value.replace(/[^0-9.]/g, "");
      setBill(Number(inputElement.value));
    } else {
      if (Number(inputElement.value) >= 1) {
        inputElement.value = inputElement.value.replace(/\D/g, "");
        setPersons(Number(inputElement.value));
      }
    }
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
                onChange={(e) => validateInputs(e.target)}
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
                  onClick={() =>
                    setPorcentage(Number(item.slice(0, item.length - 1)))
                  }
                >
                  {item}
                </button>
              ))}
              <input type="text" />
            </div>
          </div>
          <div className="personNumber">
            <h1>Number of People</h1>
            <div className="specialInput">
              <input
                type="text"
                placeholder="0"
                id="personInput"
                onChange={(e) => validateInputs(e.target)}
              />
              <img src={person} alt="person simbol" />
            </div>
          </div>
        </div>

        <div className="result">
          <h1 className="tittleResult">
            Tip Amount <span>/ person</span>
          </h1>
          <h1 className="finalResult">${bill && persons ? (bill*(porcentage/100))/persons : 0.00}</h1>
          <h1 className="tittleResult">
            Total <span>/ tip</span>
          </h1>
          <h1 className="finalResult">${bill ? bill*(porcentage/100) : 0.00}</h1>
          {bill && <button>RESET</button>}
        </div>
      </div>
    </div>
  );
};

export default TipCalculatorApp;
