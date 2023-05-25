import { useState } from "react";
import { differenceInYears, set } from "date-fns";
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

  const isLeapYear = (year: number): Boolean => {
    if (year % 4 === 0) {
      return true;
    } else {
      return false;
    }
  };

  const setMaxD = (month: number, forInput: boolean): number => {
    if (month === 2) {
      if (forInput) {
        forInput = false;
        return isLeapYear(+inputDate.year) ? 29 : 28;
      } else {
        return isLeapYear(actualYear) ? 29 : 28;
      }
    } else if (month <= 7) {
      if (month % 2 === 0) {
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

  const displayInvalidMessage = ():boolean => {
    if (maxDays < +inputDate.day) {
      displayWarningMessage("dayInput", "block", invalidDay);
      return true
    }
    else {
      displayWarningMessage("dayInput", "none", emptyWarning)
      return false;
    }
  }

  const displayWarningMessage = (
    itemWarning: string | null,
    display: Display,
    warningMsg: string
  ): void => {
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

  const checkNoEmpty = (): boolean => {
    if (
      inputDate.month !== "" &&
      inputDate.day !== "" &&
      inputDate.year !== ""
    ) {
      return true;
    } else {
      return false;
    }
  };

  const dayResult = (): number => {
    if (+inputDate.day > actualDay) {
      console.log("despues");
      return actualDay + setMaxD(actualMonth - 1, false) - +inputDate.day;
    } else {
      console.log("antes");
      return actualDay - +inputDate.day;
    }
  };

  const monthResult = (): number => {
    if (+inputDate.month > actualMonth) {
      return +inputDate.day > actualDay
        ? actualMonth + 12 - (+inputDate.month + 1)
        : actualMonth + 12 - +inputDate.month;
    } else if (+inputDate.month === actualMonth) {
      return 0;
    } else {
      return +inputDate.day > actualDay
        ? actualMonth - (+inputDate.month + 1)
        : actualMonth - +inputDate.month;
    }
  };

  const results = ():void => {
    const actualDate: Date = new Date(actualYear, actualMonth, actualDay);
    const dateGived: Date = new Date(
      +inputDate.year,
      +inputDate.month,
      +inputDate.day
    );
    if (checkNoEmpty() && !displayInvalidMessage()) {
      setResultDate({
        day: dayResult() + "",
        month: monthResult() + "",
        year: differenceInYears(actualDate, dateGived) + "",
      });
    }
    else {
      setResultDate({
        day: "",
        month: "",
        year: "",
      })
    }
    console.log(maxDays);
  };

  const verifyContent = (inputElement: HTMLInputElement): void => {
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
        setMaxDays(setMaxD(+inputElement.value, true));
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
    displayInvalidMessage();
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
        <button onClick={() => results()}>
          <img src={btnImage} alt="arrowButton" />
        </button>
      </div>
      <div className="resultDate-container">
        <h1 className="years">
          <p>{resultDate.year === "" ? "- -" : resultDate.year}</p> years
        </h1>
        <h1 className="months">
          <p>{resultDate.month === "" ? "- -" : resultDate.month}</p> months
        </h1>
        <h1 className="days">
          <p>{resultDate.day === "" ? "- -" : resultDate.day}</p> days
        </h1>
      </div>
    </div>
  );
};

export default AgeApp;
