import React from "react";
import { Link } from "react-router-dom";

const Nav = props => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark sticky-top mb-4">
      <div className="container collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              All Recipes
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/add-recipe" className="nav-link">
              Add Your Recipe!
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/add-user" className="nav-link">
              Add Yourself!
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
