import React from "react";
import "./App.css";
import logo from "./logo.svg";
import { defaultStyles, styleContext } from "./style_context/style_context";

function App() {
  return (
    <styleContext.Provider value={defaultStyles}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </styleContext.Provider>
  );
}

export default App;
