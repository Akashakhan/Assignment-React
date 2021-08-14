import React from "react";
import TableDis from "./components/TableDis";
import CartT from "./components/CartT";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={TableDis} />
          <Route exact path="/cart" component={CartT} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
