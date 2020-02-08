import React from "react";
import { fakeAuth } from "../utilities/fake-authentication";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to="/add-user" />
        )
      }
    />
  );
};

export default ProtectedRoute;

