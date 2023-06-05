import "./InteractiveCard.css";
import mobileBackground from "./images/bg-main-mobile.png";
import cardBack from "./images/bg-card-back.png";
import cardFront from "./images/bg-card-front.png";
import cardIcon from "./images/card-logo.svg";

import { useState } from "react";

const InteractiveCard = () => {
  const [cvc, setCvc] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [expMonth, setExpMonth] = useState<string>("");
  const [expYear, setExpYear] = useState<string>("");



  return (
    <div>
      <main className="principal-container">
        <div className="imgContainer">
          <div
            className="mobileBackground"
            style={{ backgroundImage: `url(${mobileBackground})` }}
          >
            <div
              className="cardBack"
              style={{ backgroundImage: `url(${cardBack})` }}
            >
              <p>{cvc === "" ? "000" : cvc}</p>
            </div>
            <div
              className="cardFront"
              style={{ backgroundImage: `url(${cardFront})` }}
            >
              <img src={cardIcon} alt="Card icons" />
              <h2>{number === "" ? "0000 0000 0000 0000" : number}</h2>
              <h3>
                <p>{name === "" ? "Firstname Lastname" : name}</p>
                <p>
                  {expMonth === "" || expYear === ""
                    ? "00/00"
                    : expMonth + "/" + expYear}
                </p>
              </h3>
            </div>
          </div>
        </div>
        <div className="form-container">
          <p>CardHolder Name</p>
          <input
            type="text"
            className="longInput"
            placeholder="e.g Jane Appleseed"
            onChange={(e) => 
              setName(e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, ''))}
          />
          <p>Card Number</p>
          <input
            type="text"
            className="longInput"
            placeholder="e.g. 1234 5678 9123 0000"
            maxLength={19}
            onChange={(e) => setNumber(e.target.value)}
          />
          <div className="date-cvc-container">
            <p className="date-tittle">Exp. Date (MM/YY)</p>
            <p className="cvc tittle">Cvc</p>
            <input
              type="text"
              className="shortInput"
              placeholder="MM"
              maxLength={2}
              onChange={(e) =>
                setExpMonth(
                  (e.target.value = e.target.value.replace(/\D/g, ""))
                )
              }
            />
            <input
              type="text"
              className="shortInput"
              placeholder="YY"
              maxLength={2}
              onChange={(e) =>
                setExpYear((e.target.value = e.target.value.replace(/\D/g, "")))
              }
            />
            <input
              type="text"
              className="cvcInput"
              placeholder="e.g. 123"
              maxLength={3}
              onChange={(e) =>
                setCvc((e.target.value = e.target.value.replace(/\D/g, "")))
              }
            />
          </div>
          <button>Confirm</button>
        </div>
      </main>
      <footer className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Kenenth Fuentes (KenFu03)</a>.
      </footer>
    </div>
  );
};

export default InteractiveCard;
