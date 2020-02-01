import React, { Component } from "react";

import { getRecipeId } from "../utilities/api";

import { jsonToDateString } from "../utilities/general";

// ----- Components ----- //
import PageHeader from "./page-header";

class Recipe extends Component {
  state = {
    recipe: {
      user: {},
      ingredients: [],
      comments: []
    }
  };

  // ----- Calling ----- //
  componentDidMount() {
    getRecipeId(this.props.match.params.id).then(recipe => {
      console.log(recipe);
      this.setState({ recipe });
    });
  }

  render() {
    const { recipe } = this.state;

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
          {recipe.comments.map((comment, idx) => {
            return (
              <details className="mb-1 alert alert-secondary" key={idx}>
                <summary>
                  {comment.user} ({jsonToDateString(comment.dateAdded)})
                </summary>
                <div>
                  <p>{comment.text}</p>
                </div>
              </details>
            );
          })}
        </section>
      </React.Fragment>
    );
  }
}

export default Recipe;
