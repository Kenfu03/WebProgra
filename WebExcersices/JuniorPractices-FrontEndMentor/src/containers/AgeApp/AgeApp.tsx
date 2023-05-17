import { useState } from "react";
import "./AgeApp.css";
import btnImage from "./assets/images/icon-arrow.svg";

type Display = "none" | "block";

interface WarningObjTypes {
  name: string;
  displayStyle: Display;
  warning: string;
}

interface DatesTypes {
  day: string;
  month: string;
  year: string;
}

const Warning = (prop: { warObj: WarningObjTypes }) => {
  const pStyles = {
    display: prop.warObj.displayStyle,
  };

  return (
    <p className="warning" id={prop.warObj.name + "Warning"} style={pStyles}>
      {prop.warObj.warning}
    </p>
  );
};

const AgeApp = () => {
  const date: Date = new Date();
  const [maxDays, setMaxDays] = useState<number>(31);
  const actualDay: number = date.getDate();
  const actualMonth: number = date.getUTCMonth() + 1;
  const actualYear: number = date.getFullYear();
  const emptyWarning: string = "This field is required";
  const invalidDay: string = "Need to be a valid day";
  const [warningDayObj, setWarningDayObj] = useState<WarningObjTypes>({
    name: "day",
    displayStyle: "none",
    warning: emptyWarning,
  });
  const [warningMonthObj, setWarningMonthObj] = useState<WarningObjTypes>({
    name: "month",
    displayStyle: "none",
    warning: emptyWarning,
  });
  const [warningYearObj, setWarningYearObj] = useState<WarningObjTypes>({
    name: "year",
    displayStyle: "none",
    warning: emptyWarning,
  });
  const [inputDate, setInputDate] = useState<DatesTypes>({
    day: "",
    month: "",
    year: "",
  });
  const [resultDate, setResultDate] = useState<DatesTypes>({
    day: "",
    month: "",
    year: "",
  });

  const setMaxD = (month: number) => {
    if (month === 2) {
      return 28;
    } else if (month <= 7) {
      if (month % 2 === 0){
        return 30;
      } else {
        return 31;
      }
    } else {
      if (month % 2 === 0) {
        return 31;
      } else {
        return 30;
      }
    }
  };

  const displayWarningMessage = (
    itemWarning: string | null,
    display: Display,
    warningMsg: string
  ) => {
    if (itemWarning === "dayInput") {
      setWarningDayObj({
        ...warningDayObj,
        displayStyle: display,
        warning: warningMsg,
      });
    } else if (itemWarning === "monthInput") {
      setWarningMonthObj({
        ...warningMonthObj,
        displayStyle: display,
      });
    } else if (itemWarning === "yearInput") {
      setWarningYearObj({
        ...warningYearObj,
        displayStyle: display,
      });
    }
  };

  const results = () => {
    if ((actualDay - +inputDate.day) < 0){
      setResultDate({
        ...resultDate,
        day: ((maxDays + (actualDay - +inputDate.day)) + "")
      })
    } else {
      setResultDate({
        ...resultDate,
        day: ((actualDay - +inputDate.day) + "")
      })
    }
  }
 
  const verifyContent = (inputElement: HTMLInputElement) => {
    let dayInputVerify: boolean =
      inputElement.getAttribute("id") === "dayInput";
    let monthInputVerify: boolean =
      inputElement.getAttribute("id") === "monthInput";
    let yearInputVerify: boolean =
      inputElement.getAttribute("id") === "yearInput";

    displayWarningMessage(
      inputElement.getAttribute("id"),
      "none",
      emptyWarning
    );

    if (+inputElement.value < 0) {
      inputElement.value = "";
      displayWarningMessage(
        inputElement.getAttribute("id"),
        "block",
        emptyWarning
      );
    }
    if (dayInputVerify || monthInputVerify) {
      if (inputElement.value.length === 1) {
        if (inputElement.value[0] !== "0") {
          inputElement.value = "0" + inputElement.value;
        } else {
          inputElement.value = "";
          displayWarningMessage(
            inputElement.getAttribute("id"),
            "block",
            emptyWarning
          );
        }
      } else {
        if (inputElement.value[0] === "0") {
          inputElement.value = inputElement.value[1] + inputElement.value[2];
        }
      }
      inputElement.value = inputElement.value.slice(0, 2);
      if (dayInputVerify) {
        if (+inputElement.value > maxDays) {
          inputElement.value = maxDays + "";
        }
        setInputDate({ ...inputDate, day: inputElement.value });
      } else if (monthInputVerify) {
        if (+inputElement.value > 12) {
          inputElement.value = "12";
        }
        setMaxDays(setMaxD(+inputElement.value));
        setInputDate({ ...inputDate, month: inputElement.value });
      }
    } else if (yearInputVerify) {
      inputElement.value = inputElement.value.slice(0, 4);
      if (inputElement.value === "") {
        displayWarningMessage(
          inputElement.getAttribute("id"),
          "block",
          emptyWarning
        );
      }
      if (+inputElement.value > actualYear) {
        inputElement.value = actualYear + "";
      }
      setInputDate({ ...inputDate, year: inputElement.value });
    }

    if (maxDays < +inputDate.day){
      setInputDate({
        ...inputDate,
        day: maxDays + ""
      })
      displayWarningMessage(
        "dayInput",
        "block",
        invalidDay
      )
    }
    results();
  };

  const test = () => {
    console.log(inputDate.day);
    console.log(inputDate.month);
    console.log(inputDate.year);
  };

  return (
    <div className="ageApp-container">
      <div className="inputDate-container">
        <p>DAY</p>
        <p>MONTH</p>
        <p>YEAR</p>
        <input
          type="number"
          name="day"
          id="dayInput"
          placeholder="DD"
          onChange={(e) => verifyContent(e.target)}
        />
        <input
          type="number"
          name="month"
          id="monthInput"
          placeholder="MM"
          onChange={(e) => verifyContent(e.target)}
        />
        <input
          type="number"
          name="year"
          id="yearInput"
          placeholder="YYYY"
          onChange={(e) => verifyContent(e.target)}
        />
        <Warning warObj={warningDayObj} />
        <Warning warObj={warningMonthObj} />
        <Warning warObj={warningYearObj} />
      </div>
      <div className="btn-container">
        <div className="line"></div>
        <button onClick={() => test()}>
          <img src={btnImage} alt="arrowButton" />
        </button>
      </div>
      <div className="resultDate-container">
        <h1 className="years">
          <p>{inputDate.year === "" ? "- -" : resultDate.day}</p> years
        </h1>
        <h1 className="months">
          <p>{inputDate.month === "" ? "- -" : resultDate.month}</p> months
        </h1>
        <h1 className="days">
          <p>{inputDate.day === "" ? "- -" : resultDate.year}</p> days
        </h1>
      </div>
    </div>
  );
};

export default AgeApp;
