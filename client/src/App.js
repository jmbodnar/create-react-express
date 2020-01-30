import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//as = allows me to change the name of BrowserRouter to something shorter and easier to work with.
import PageHeader from './components/PageHeader/PageHeader';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Recipe from './components/Recipe/Recipe';
import Recipes from './components/Recipes/Recipes';
import NotFound from './components/NotFound/NotFound';
import './styles/custom.css';


function App() {
  return (
    <Router>
{/* Router = wraps all your components that you want to have the ability to use routing */}
      <div className='App'>
        {/* header needs a state so it will change once it renders that single recipes page */}
        <Header />
        <PageHeader />
        <Switch>
          {/* Switch = stops the whole process of going through all the routes. As soon as the path matches the URL it wll stop and only render out that specific component. You will have to include "exact" for the "home" route so it won't stop on this component it will keep checking */}
          <Route exact path='/' component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/welcome' component={Welcome} />
          <Route path='/login' component={Login} />
          {/* <Route path='/recipe' component={Recipe} /> */}
          <Route path='/allrecipes' component={Recipes} />
          <Route path='/recipe/' component={Recipe} />
          <Route path='*' component={NotFound} />
        </Switch>

      </div>

    </Router>
  );
}

export default App;
