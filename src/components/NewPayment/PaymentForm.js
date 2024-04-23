import React, { useState } from "react";

import "./PaymentForm.css";

const PaymentForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [today, setToday] = useState(null);

  const textChangeHandler = (event) => {
    setName(event.target.value);
  };
  const numberChangeHandler = (event) => {
    setPrice(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setToday(event.target.value);
  };
  const buttonSubmitHandler = () => {
    console.log(name, price, today);
  };
  return (
    <form>
      <div className="new-payment__controls">
        <div className="new-payment__control">
          <label>이름</label>
          <input type="text" value={name} onChange={textChangeHandler} />
        </div>
        <div className="new-payment__control">
          <label>금액</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={price}
            onChange={numberChangeHandler}
          />
        </div>
        <div className="new-payment__control">
          <label>날짜</label>
          <input
            type="date"
            min="2019-01-01"
            max="2024-12-31"
            value={today}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-payment__actions">
        <button type="button" onClick={buttonSubmitHandler}>
          결제 추가
        </button>
      </div>
    </form>
  );
};

export default PaymentForm;
