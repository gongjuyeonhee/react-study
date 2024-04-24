import { useState } from "react";
import "./App.css";
import PaymentForm from "./components/PaymentForm/PaymentForm";
import Expenses from "./components/Payments/Expenses";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "수건",
      amount: 12.33,
      date: new Date(2025, 8, 14),
    },
  ]);

  const getPaymentFormData = (data) => {
    console.log("data", data);
    console.log("exp", expenses);

    setExpenses([
      {
        id: Math.random().toString(),
        title: data.name,
        amount: data.price,
        date: data.today,
      },
      ...expenses, //새로운 데이터들 추가해주는 작업
    ]);
  };

  return (
    <>
      <PaymentForm getPaymentFormData={getPaymentFormData} />
      <Expenses items={expenses} />
    </>
  );
}

export default App;
