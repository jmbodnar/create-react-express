import React, { Component } from "react";
import PageHeader from "./page-header";

class CommentForm extends Component {
  state = {
    commentData: {
      user: "Test"
    }
  };

  handleChange = function(event) {
    const { commentData } = this.state;
    commentData[event.target.name] = event.target.value;
    this.setState({ commentData });
  };

  render() {
    const { commentData } = this.state;
    const { recipeId, handleSubmission } = this.props;

    return (
      <div className="my-4">
        <PageHeader title="Add Your Comment" />
        <form
          onSubmit={event => handleSubmission(event, recipeId, commentData)}
        >
          <div className="form-group">
            <label htmlFor="email">Your Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              onChange={this.handleChange.bind(this)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="userFname">Your First Name</label>
            <input
              type="text"
              name="userFname"
              id="userFname"
              className="form-control"
              required
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="userLname">Your Last Name</label>
            <input
              type="text"
              name="userLname"
              id="userLname"
              required
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
              required
              onChange={this.handleChange.bind(this)}
            ></textarea>
          </div>
          <button className="btn btn-danger btn-block" type="submit">
            Test Submission
          </button>
        </form>
      </div>
    );
  }
}

export default CommentForm;
