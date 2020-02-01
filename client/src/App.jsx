import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainHeader from "./components/main-header";
import Nav from "./components/nav";
import Recipes from "./components/recipes";
import Recipe from "./components/recipe";

class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <MainHeader />
          <Nav />
          <main className="container">
            <Switch>
              <Route exact path="/" component={Recipes} />
              <Route path="/recipe/:id" component={Recipe} />
            </Switch>
          </main>
        </Router>
      </div>
    );
  }
}

export default App;
