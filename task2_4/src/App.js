import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import TaskTwo from "./TaskTwo";
import TaskFour from "./TaskFour";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/task1">Task1</Link>
          </li>
          <li>
            <Link to="/task4">Task4</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/task1" component={TaskTwo} />
        <Route path="/task4" component={TaskFour} />
      </Switch>
    </Router>
  );
}

export default App;
