import React, { Component } from "react";
import PageHeader from "./page-header";
import { addRecipeComment } from "../utilities/api";

class CommentForm extends Component {
  state = {
    recipeId: this.props.recipeId
  };

  handleChange = function(event) {
    let prop = event.target.name;
    let value = event.target.value;
    this.setState({ [prop]: value });
  };

  handleSubmit = function(event) {
    event.preventDefault();
    const { recipeId, email, firstname, lastname, text } = this.state;
    const data = { email, user: `${firstname} ${lastname}`, text };

    addRecipeComment(recipeId, data).then(response => {
      console.log(response);
    });
  };

  render() {
    return (
      <div className="my-4">
        <PageHeader title="Add Your Comment" />
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <label htmlFor="email">Your Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="firstname">Your First Name</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              className="form-control"
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Your Last Name</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              className="form-control"
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="comment-text">Your Comment</label>
            <textarea
              className="form-control"
              id="text"
              rows="3"
              name="text"
              onChange={this.handleChange.bind(this)}
            ></textarea>
          </div>
          <button className="btn btn-outline-primary btn-block" type="submit">
            Test Submission
          </button>
        </form>
      </div>
    );
  }
}

export default CommentForm;
