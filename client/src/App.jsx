import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import MainHeader from "./components/main-header";
import Nav from "./components/nav";
import Recipe from "./components/recipe";
import RecipeForm from "./components/recipe-form";
import UserForm from "./components/user-form";
import Recipes2 from "./components/recipes2";




const mockAuth = {
  isAuthenticated: false,    // isauthenticated needs to be changed to true here for access to page
  authenticate(cb){
    this.isAuthenticated = true
    setTimeout(cb, 100)  //fake async
  },
  logout(cb){
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const PrivateRoute = ({component: Component, ...rest}) =>(
  <Route {...rest} render ={({location}) =>(
    mockAuth.isAuthenticated ===true
    ? <Component {...rest}/>
    : <Redirect to ={{
      pathname: "/",
      state: {from: location}
    }}/>
  )}/>
)





class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <MainHeader />
          <Nav />
          <main className="container">
            <Switch>
              <Route exact path="/" component={Recipes2} />

              <PrivateRoute path="/recipe/:id" component={Recipe} />
              <PrivateRoute path="/add-recipe" component={RecipeForm} />
              <Route path="/add-user" component={UserForm} />
            </Switch>
          </main>
        </Router>
      </div>
    );
  }
}

export default App;
