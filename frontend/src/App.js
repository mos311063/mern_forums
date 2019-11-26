import React, { Component } from "react";
import ReactDOM from "react-dom";
import Home from "./home";
import Register from "./components/register";
import { Route, Switch, Link, BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to="mern_forums/" className="position-fixed ml-3 mt-1">
            Home
          </Link>
          <Link to="mern_forums/register" className="position-fixed ml-3 mt-5">
            Register
          </Link>
        </div>
        <Switch>
          <Route exact path="/mern_forums/" component={Home} />
          <Route path="mern_forums/register" component={Register} />
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
