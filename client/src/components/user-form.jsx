import React, { Component } from "react";
import PageHeader from "./page-header";
import { addUser } from "../utilities/api";

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
      this.props.history.replace("/");
    });
  };

  render() {
    return (
      <React.Fragment>
        <PageHeader title="Add Yourself!" />
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
            className="btn btn-primary btn-block"
          />
        </form>
      </React.Fragment>
    );
  }
}

export default UserForm;
