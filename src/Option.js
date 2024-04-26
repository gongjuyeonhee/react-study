import React from "react";
import Dropdown from "./Dropdown";

const Option = () => {
  const options = [
    { label: "빨강", value: "red" },
    { label: "녹색", value: "green" },
    { label: "파랑", value: "blue" },
  ];

  return <Dropdown options={options} />;
};

export default Option;
