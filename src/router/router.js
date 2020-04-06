import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MovieApp from "../component/MovieApp";
import Description from "../component/description"

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={MovieApp} />
 <Route path="/description/:id" exact component={Description} />
    </Switch>
  </Router>
);

export default AppRouter;