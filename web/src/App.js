import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./App.css";

import Main from "./components/layout/mainLayout";

const hist = createBrowserHistory();
function App() {
  return (
    <div className="App">
      <Router history={hist}>
        <Switch>
          <Route path="/" component={Main} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
