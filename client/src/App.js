import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <div>
            Ready to rock and roll!!

          </div>
        </div>
      </Router>
    );
  }
}

export default App;
