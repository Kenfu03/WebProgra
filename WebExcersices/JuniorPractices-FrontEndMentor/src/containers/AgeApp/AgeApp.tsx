import { useState } from "react";
import { differenceInYears } from "date-fns";
import "./AgeApp.css";
import btnImage from "./assets/images/icon-arrow.svg";

interface DatesTypes {
  day: string;
  month: string;
  year: string;
}

const AgeApp = () => {
  const date: Date = new Date();
  const actualDay: number = date.getDate();
  const actualMonth: number = date.getUTCMonth() + 1;
  const actualYear: number = date.getFullYear();
  const [maxDays, setMaxDays] = useState<number>(31);
  const [dayWarning, setDayWarning] = useState<string>("");
  const [monthWarning, setMonthWarning] = useState<string>("");
  const [yearWarning, setYearWarning] = useState<string>("");
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

  /* Logica */

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
      return month % 2 === 0 ? 30 : 31;
    } else {
      return month % 2 === 0 ? 31 : 30;
    }
  };

  const checkNoEmpty = (): boolean => {
    return (
      inputDate.month !== "" && inputDate.day !== "" && inputDate.year !== ""
    );
  };

  const dayResult = (): number => {
    if (+inputDate.day > actualDay) {
      return actualDay + setMaxD(actualMonth - 1, false) - +inputDate.day;
    } else {
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

  const results = (): void => {
    const actualDate: Date = new Date(actualYear, actualMonth, actualDay);
    const dateGived: Date = new Date(
      +inputDate.year,
      +inputDate.month,
      +inputDate.day
    );
    if (checkNoEmpty() && maxDays >= +inputDate.day) {
      displayWarningMessage("dayInput", "");
      setResultDate({
        day: dayResult() + "",
        month: monthResult() + "",
        year: differenceInYears(actualDate, dateGived) + "",
      });
    } else {
      if (maxDays < +inputDate.day) {
        displayWarningMessage("dayInput", "Need to be a valid day");
      }
      setResultDate({
        day: "",
        month: "",
        year: "",
      });
    }
  };

  /*  Inputs y validaciones de datos */

  const displayWarningMessage = (
    itemWarning: string | null,
    warningMsg: string
  ): void => {
    if (itemWarning === "dayInput") {
      setDayWarning(warningMsg);
    } else if (itemWarning === "monthInput") {
      setMonthWarning(warningMsg);
    } else {
      setYearWarning(warningMsg);
    }
  };

  const verifyContent = (inputElement: HTMLInputElement): void => {
    let dayInputVerify: boolean =
      inputElement.getAttribute("id") === "dayInput";
    let monthInputVerify: boolean =
      inputElement.getAttribute("id") === "monthInput";
    let yearInputVerify: boolean =
      inputElement.getAttribute("id") === "yearInput";

    displayWarningMessage(inputElement.getAttribute("id"), "");

    if (+inputElement.value < 0) {
      inputElement.value = "";
      displayWarningMessage(
        inputElement.getAttribute("id"),
        "This field is required"
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
            "This field is required"
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
          "This field is required"
        );
      }
      if (+inputElement.value > actualYear) {
        inputElement.value = actualYear + "";
      }
      setInputDate({ ...inputDate, year: inputElement.value });
    }
    if (maxDays < +inputDate.day) {
      displayWarningMessage("dayInput", "Need to be a valid day");
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
        <p className="warning" id={"dayWarning"}>
          {dayWarning}
        </p>
        <p className="warning" id={"monthWarning"}>
          {monthWarning}
        </p>
        <p className="warning" id={"yearWarning"}>
          {yearWarning}
        </p>
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
