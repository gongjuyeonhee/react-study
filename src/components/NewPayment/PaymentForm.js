import React, { useState } from "react";

import "./PaymentForm.css";

const PaymentForm = () => {
  const [objectState, setObjectState] = useState({
    name: "",
    price: 0,
    today: new Date(),
  });

  const textChangeHandler = (event) => {
    setObjectState((prevState) => ({ ...prevState, name: event.target.value }));
  };
  const numberChangeHandler = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      price: event.target.value,
    }));
  };
  const dateChangeHandler = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      today: event.target.value,
    }));
  };

  const buttonSubmitHandler = (e) => {
    e.preventDefault();
    console.log(objectState);

    setObjectState({
      name: "",
      price: 0,
      today: new Date(),
    });
  };

  return (
    <form onSubmit={buttonSubmitHandler}>
      <div className="new-payment__controls">
        <div className="new-payment__control">
          <label>이름</label>
          <input
            type="text"
            value={objectState.name}
            onChange={textChangeHandler}
          />
        </div>
        <div className="new-payment__control">
          <label>금액</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={objectState.price}
            onChange={numberChangeHandler}
          />
        </div>
        <div className="new-payment__control">
          <label>날짜</label>
          <input
            type="date"
            min="2019-01-01"
            max="2024-12-31"
            value={objectState.today}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-payment__actions">
        <button type="submit">결제 추가</button>
      </div>
    </form>
  );
};

export default PaymentForm;
