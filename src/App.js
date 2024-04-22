import "./App.css";
import Toast from "./components/Toast";
import ToastMessage from "./components/ToastMessage";
import ToastButton from "./components/ToastButton";

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
      <Toast message={messageArray[0]}>
        <ToastMessage message={messageArray[0]} />
        <ToastButton message={messageArray[0]} />
      </Toast>
      <Toast message={messageArray[2]}>
        <ToastMessage message={messageArray[2]} />
        <ToastButton message={messageArray[2]} />
      </Toast>
      <Toast message={messageArray[4]}>
        <ToastMessage message={messageArray[4]} />
        <ToastButton message={messageArray[4]} />
      </Toast>
    </div>
  );
}

export default App;
