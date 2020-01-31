import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// ----- Component Imports ----- //
import MainHeader from "./components/main-header";
import Nav from "./components/nav";

// ----- Page Imports ----- //
import Recipes from "./pages/Recipes";
import Recipe from "./pages/Recipe";

// ----- Main Componentn ----- //
class App extends Component {
  state = {
    recipes: [],
    categories: [],
    users: []
  };

  getRecipes = async () => {
    return await (
      await fetch(`https://my-json-server.typicode.com/jmbodnar/recipes-db/db`)
    ).json();
  };

  componentDidMount() {
    this.getRecipes().then(data => {
      const { recipes, categories, users } = data;
      this.setState({ recipes, categories, users });
    });
  }

  render() {
    return (
      <div>
        <Router>
          <MainHeader />
          <Nav />
          <main className="container">
            <Switch>
              <Route exact path="/" component={Recipes} />
              <Route
                exact
                path="/recipes"
                component={Recipes}
                data={this.state}
              />
              <Route path="/recipes/:id" component={Recipe} />
            </Switch>
          </main>
        </Router>
      </div>
    );
  }
}

export default App;
