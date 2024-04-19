import "./App.css";
import Toast from "./components/Toast";

function App() {
  const messageArray = [
    {
      title: "success",
      text: "Right On!",
    },
    {
      title: "success",
      text: "Right On!",
    },
    {
      title: "warning",
      text: "Hmmm",
    },
    {
      title: "warning",
      text: "Hmmm",
    },
    {
      title: "error",
      text: "oh no!",
    },
    {
      title: "error",
      text: "oh no!",
    },
  ];

  return (
    <div className="wrapper">
      {messageArray.map((message) => (
        <Toast title={message.title} text={message.text} />
      ))}
    </div>
  );
}

export default App;
