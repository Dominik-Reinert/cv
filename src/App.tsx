import React from "react";
import "./App.css";
import { Background } from "./background/background";
import { Navbar } from "./navbar/navbar";
import { PersonalInfo } from "./personal_info/personal_info";
import { defaultStyles, styleContext } from "./style_context/style_context";

function App() {
  return (
    <styleContext.Provider value={defaultStyles}>
      <Background>
        <Navbar />
        <PersonalInfo />
      </Background>
    </styleContext.Provider>
  );
}

export default App;
