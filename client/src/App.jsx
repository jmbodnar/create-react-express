import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import MainHeader from "./components/main-header";
import AppNavbar from "./components/nav";
import Recipes from "./components/recipes";
// import Recipe from "./components/recipe";
// import RecipeForm from "./components/recipe-form";
import UserForm from "./components/user-form";
// import Recipes2 from "./components/recipes2";
import store from './store';
import { loadUser } from './actions/authActions';
import { Provider } from "react-redux";
import { Container } from 'reactstrap';
// import { Router } from "express";


class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
        <div className='App'>
          <AppNavbar />
          <Container>
          <Switch>
              <Route exact path="/" component={Recipes} />
              {/* <Route exact path="/recipes2" component={Recipes2} /> */}
              {/* <Route path="/recipe/:id" component={Recipe} /> */}
              {/* <Route path="/add-recipe" component={RecipeForm} /> */}
              <Route path="/add-user" component={UserForm} />
            </Switch>
          </Container>
        </div>
        </Router>
      </Provider>
    );
  }
  // render() {
  //   return (
  //     <div>
  //       <Provider>
  //         <MainHeader />
  //         <Nav />
  //         <main className="container">
  //           <Switch>
  //             <Route exact path="/" component={Recipes} />
  //             <Route exact path="/recipes2" component={Recipes2} />
  //             <Route path="/recipe/:id" component={Recipe} />
  //             <Route path="/add-recipe" component={RecipeForm} />
  //             <Route path="/add-user" component={UserForm} />
  //           </Switch>
  //         </main>
  //       </Provider>
  //     </div>
  //   );
  // }
}

export default App;
