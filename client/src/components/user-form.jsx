import React, { Component } from "react";
import PageHeader from "./page-header";
import { addUser } from "../utilities/api";
import { fakeAuth } from "../utilities/fake-authentication";

class UserForm extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: ""
  };

  handleInput = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const user = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email
    };

    addUser(user).then(() => {
      fakeAuth.authenticated(() => {
        this.props.history.replace("/");
      });
    });
  };

  handleLogout = () => {
    fakeAuth.signout(() => {
      console.log(fakeAuth.isAuthenticated());
      this.props.history.replace("/add-user");
    });
  };

  render() {
    if (!fakeAuth.isAuthenticated()) {
      return (
        <React.Fragment>
          <PageHeader title="Register/Login" />
          <form onSubmit={this.handleSubmit} className="mb-4">
            {" "}
            <fieldset>
              <legend>Your Information</legend>
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <label htmlFor="firstname">First Name</label>
                    <input
                      className="form-control"
                      type="text"
                      id="firstname"
                      name="firstname"
                      placeholder="First name"
                      onChange={this.handleInput}
                      required
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label htmlFor="lastname">Last Name</label>
                    <input
                      className="form-control"
                      type="text"
                      id="lastname"
                      name="lastname"
                      placeholder="Last name"
                      onChange={this.handleInput}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  className="form-control"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your-address@email.com"
                  onChange={this.handleInput}
                  required
                />
              </div>
            </fieldset>
            <input
              type="submit"
              value="Register"
              className="btn btn-danger btn-block"
            />
          </form>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <PageHeader title="Logout" />

        <p className="text-center">
          You're logged in already. Would you like to logout?
        </p>
        <button
          onClick={this.handleLogout.bind(this)}
          className="btn btn-block btn-danger"
        >
          Logout
        </button>
      </React.Fragment>
    );
  }
}

export default UserForm;
