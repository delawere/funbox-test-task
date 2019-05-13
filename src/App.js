import React from "react";
import Level1Page from "./components/pages/Level1Page";
import Level2Page from "./components/pages/Level2Page";
import StartPage from "./components/pages/StartPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { LANDING, TASK1, TASK2 } from "./router/constants";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={LANDING} component={StartPage} />
        <Route path={TASK1} component={Level1Page} />
        <Route path={TASK2} component={Level2Page} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
