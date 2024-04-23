import React from "react";

import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const dateObj = new Date(props.date); // 문자열을 Date 객체로 변환
  const month = dateObj.toLocaleString("ko-KR", { month: "long" });
  const day = dateObj.toLocaleString("ko-KR", { day: "2-digit" });
  const year = dateObj instanceof Date ? dateObj.getFullYear() : null;

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
