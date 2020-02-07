import React, { Component } from "react";
import { getRecipeById, addRecipeComment } from "../utilities/api";
import { jsonToDateString } from "../utilities/general";

// ----- Components ----- //
import PageHeader from "./page-header";
import CommentForm from "./comment-form";

class Recipe extends Component {
  state = {
    recipe: {
      user: {},
      ingredients: [],
      comments: []
    }
  };

  handleSubmission = (event, recipeId, commentData) => {
    event.preventDefault();

    addRecipeComment(recipeId, commentData).then(() => {
      getRecipeById(recipeId).then(recipe => {
        this.setState({ recipe });
      });
    });

    event.target.reset();
  };

  // ----- Calling ----- //
  componentDidMount() {
    getRecipeById(this.props.match.params.id).then(recipe => {
      this.setState({ recipe });
    });
  }

  render() {
    const { recipe } = this.state;
    const recipeId = this.props.match.params.id;

    return (
      <React.Fragment>
        <PageHeader title={recipe.title} />
        <section className="row">
          <div className="col-sm-8">
            <dl>
              <dt>Directions</dt>
              <dd>{recipe.directions}</dd>

              <dt>Added by</dt>
              <dd>{recipe.user.firstname + " " + recipe.user.lastname}</dd>
            </dl>
          </div>
          <div className="col-sm-4">
            <dl>
              <dt>Category</dt>
              <dd>{recipe.category}</dd>

              <dt>Ingredients</dt>
              <dd>{recipe.ingredients.join(", ")}</dd>
              <dt>Date Added</dt>
              <dd>{jsonToDateString(recipe.dateAdded)}</dd>
            </dl>
          </div>
        </section>

        <PageHeader title="Comments" />
        <section className="row list-group">
          {recipe.comments.length < 1 ? (
            <div className="alert alert-secondary">
              "No one has commented on this recipe"
            </div>
          ) : null}
          {recipe.comments.map((comment, idx) => {
            return (
              <details className="mb-1 alert alert-secondary" key={idx}>
                <summary>
                  {comment.userFname ? comment.userFname : comment.user}{" "}
                  {comment.userLname ? comment.userLname : null} (
                  {jsonToDateString(comment.dateAdded)})
                </summary>
                <div>
                  <p className="mt-3 mb-0">{comment.text}</p>
                </div>
              </details>
            );
          })}
        </section>

        <CommentForm
          recipeId={recipeId}
          handleSubmission={this.handleSubmission}
        />
      </React.Fragment>
    );
  }
}

export default Recipe;
