import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      //입력 시 앞뒤로 공백이 있지만 글자가 포함된 경우
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    //값이 '' 경우, 배경을 빨간색으로 해 주어야 한다.
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      setEnteredValue("");
      return; //여기서 리턴 꼭 해주기. (안그러면 밑줄 실행됨)
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? "invalid" : ""}`}>
        <label>목표</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">목표 추가하기</Button>
    </form>
  );
};

export default CourseInput;
