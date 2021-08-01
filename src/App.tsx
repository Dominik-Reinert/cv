import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import { Background } from "./background/background";
import { Card } from "./card/card";
import { ClearStyles } from "./clear_styles/clear_styles";
import "./i18n";
import { Navbar } from "./navbar/navbar";
import { PersonalInfo } from "./personal_info/personal_info";
import { Resume } from "./resume/resume";
import { Routes } from "./routes/routes";
import { defaultStyles, styleContext } from "./style_context/style_context";

function App() {
  return (
    <styleContext.Provider value={defaultStyles}>
      <ClearStyles>
        <Background>
          <BrowserRouter>
            <Navbar />
            <Card>
              <Switch>
                <Route path={Routes.resume}>
                  <Resume />
                </Route>
                <Route path={Routes.home}>
                  <PersonalInfo />
                </Route>
                <Route path="/">
                  <Redirect to={Routes.home} />
                </Route>
              </Switch>
            </Card>
          </BrowserRouter>
        </Background>
      </ClearStyles>
    </styleContext.Provider>
  );
}

export default App;
