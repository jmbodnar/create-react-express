import React, { Component } from "react";
import PageHeader from "./page-header";
import axios from "axios";

class UserForm extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: ""
  };
  handleInputChange = event => {
    console.log("I was changed");
    const { name, value } = event.target;
    // console.log("target hapepend: ", event.target)
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    console.log("I did submit");
    console.log(`Your first name:${this.state.first_name}`);
    console.log(`Your last name:${this.state.last_name}`);
    console.log(`Your email:${this.state.email}`);

    const user = {
      firstname: this.state.first_name,
      lastname: this.state.last_name,

      email: this.state.email
    };
    axios
      .post("http://localhost:3001/api/users", user)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .then(() => {
        this.props.history.replace("/");
      });
  };
  render() {
    return (
      // <React.Fragment>
      //   <PageHeader title="Add Your Recipe!" />
      // </React.Fragment>

      /* // adding html form */
      <div className="container my-5">
        <h2>Become A User</h2>
        <form onSubmit={this.handleFormSubmit}>
          <fieldset>
            <legend>Your Information</legend>
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <label for="first_name">First Name</label>
                  <input
                    className="form-control"
                    type="text"
                    id="first_name"
                    name="first_name"
                    placeholder="First name"
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label for="last_name">Last Name</label>
                  <input
                    className="form-control"
                    type="text"
                    id="last_name"
                    name="last_name"
                    placeholder="Last name"
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label for="email">Email</label>
              <input
                className="form-control"
                type="email"
                id="email"
                name="email"
                placeholder="email"
                onChange={this.handleInputChange}
                required
              />
            </div>
          </fieldset>

          <input
            type="submit"
            value="Become A Member"
            className="btn btn-info btn-block"
          />
        </form>
      </div>
    );
  }
}
export default UserForm;
