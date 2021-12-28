import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './pages/Home';
import './App.css';
import Today from './pages/Today'
import ChoseDate from "./pages/ChoseDate";
import Galery from "./pages/Galery";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route  path="/" exact >
          <Home />
          </Route>

          <Route  path="/today"  >
          <Today />
          </Route>

          <Route  path="/chose-date"  >
          <ChoseDate />
          </Route>

          <Route  path="/galery"  >
          <Galery />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
