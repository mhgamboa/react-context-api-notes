import { useState } from "react";
import { Child } from "./components/Child";
import IsDarkContext from "./contexts/IsDark";
import "./App.css";

function App() {
  const [isDark, setIsDark] = useState("true");
  return (
    <div className="App">
      <IsDarkContext.Provider value={{ isDark, setIsDark }}>
        <Child />
      </IsDarkContext.Provider>
    </div>
  );
}

export default App;
