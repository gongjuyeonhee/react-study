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
      <Toast title={messageArray[0].title} text={messageArray[0].text} />
      <Toast title={messageArray[2].title} text={messageArray[2].text} />
      <Toast title={messageArray[4].title} text={messageArray[4].text} />
    </div>
  );
}

export default App;
