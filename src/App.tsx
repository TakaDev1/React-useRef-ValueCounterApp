import "./App.css";
import HandlePreviousValue from "./components/HandlePreviousValue";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-800">
        <h1>React-useRef-ValueCounterApp</h1>
        <HandlePreviousValue />
      </div>
    </>
  );
}

export default App;
