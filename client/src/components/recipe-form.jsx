import React, { Component } from "react";
import PageHeader from "./page-header";
import axios from "axios";

class RecipeForm extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    title: "",
    ingredients: "",
    directions: "",
    category: "entree"
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    const recipe = {
      user: {
        firstname: this.state.first_name,
        lastname: this.state.last_name
      },
      email: this.state.email,
      title: this.state.title,
      ingredients: this.state.ingredients,
      category: this.state.category,
      directions: this.state.directions
    };
    axios
      .post("/api/recipes", recipe)
      .then(res => {})
      .then(() => {
        this.props.history.replace("/");
      });
  };

  render() {
    return (
      <React.Fragment>
        <PageHeader title="Add Your Recipe!" />
        <form onSubmit={this.handleFormSubmit} className="mb-4">
          <fieldset>
            <legend>Your Information</legend>
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="first_name">First Name</label>
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
                  <label htmlFor="last_name">Last Name</label>
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
              <label htmlFor="email">Email</label>
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
          <fieldset>
            <legend>Recipe Information</legend>
            <div className="form-group">
              <label htmlFor="title">Name of Recipe</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                placeholder="Super Awesome Recipe Name"
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <datalist id="suggestions">
                <option value="chicken"></option>
                <option value="fish"></option>
                <option value="chocolate"></option>
                <option value="peppers"></option>
                <option value="toast"></option>
              </datalist>
            </div>
            <div className="form-group">
              <label htmlFor="ingredients">Ingredients</label>
              <input
                type="text"
                className="form-control"
                id="ingredients"
                name="ingredients"
                aria-describedby="ingredients-help"
                placeholder="Enter ingredients as comma separted list"
                onChange={this.handleInputChange}
                required
              />
              <small id="ingredients-help" className="form-text text-muted">
                Enter ingredients as a comma separated list, e.g.: chicken,
                onions, peppers
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Recipe Category</label>
              <select
                className="form-control"
                id="category"
                name="category"
                onChange={this.handleInputChange}
                required
              >
                <option value="entree">Entree</option>
                <option value="side dish">Side Dish</option>
                <option value="dessert">Dessert</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Directions</label>
              <textarea
                className="form-control"
                id="directions"
                name="directions"
                rows="7"
                onChange={this.handleInputChange}
                required
              ></textarea>
            </div>
          </fieldset>
          <input
            type="submit"
            value="Add Your Recipe"
            className="btn btn-primary btn-block"
          />
        </form>
      </React.Fragment>
    );
  }
}

export default RecipeForm;
