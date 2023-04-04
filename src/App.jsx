import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import OTPVerification from "./components/OTPVerification";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <OTPVerification />
    </div>
  );
}

export default App;
