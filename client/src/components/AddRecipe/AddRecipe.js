import React, { Component } from 'react';
import './AddRecipe.css';

class AddRecipe extends Component {
  state = {
    first_name: "",
    last_name: "",
    email:"",
    title: "",
    // 
    ingredients: "",
    directions:"",
    category: "entree"
  };

  handleInputChange = event => {
    console.log("I was changed");
  const { name, value } = event.target;
    // console.log("target hapepend: ", event.target)
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("I did submit");
    console.log(`Your first name:${this.state.first_name}`)
    console.log(`Your last name:${this.state.last_name}`)
    console.log(`Your email:${this.state.email}`)
    console.log(`Your title:${this.state.title}`)
    console.log(`Your ingredients:${this.state.ingredients}`)
    console.log(`Your directions:${this.state.directions}`)
  }


  render() {

    return (
      <div className="container my-5">
        <h2>Add Your Own Recipe</h2>
        <form>
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
                  <input className="form-control" type="text" id="last_name" name="last_name" placeholder="Last name" onChange={this.handleInputChange} required />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label for="email">Email</label>
              <input className="form-control" type="email" id="email" name="email" placeholder="email" onChange={this.handleInputChange} required />
            </div>
          </fieldset>
          <fieldset>
            <legend>Recipe Information</legend>
            <div className="form-group">
              <label for="title">Name of Recipe</label>
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
              <label for="ingredients">Ingredients</label>
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
                Enter ingredients as a comma separated list, e.g.:
                chicken,
                onions, peppers
        </small>
            </div>
            <div className="form-group">
              <label for="exampleFormControlSelect1">
                Recipe Category
        </label>
              <select className="form-control" id="category" name="category" onChange={this.handleInputChange} required>
                <option value="entree">
                  Entree
          </option>
                <option value="side dish">
                  Side Dish
          </option>
                <option value="dessert">
                  Dessert
          </option>
              </select>
            </div>
            <div className="form-group">
              <label for="exampleFormControlTextarea1">
                Directions
        </label>
              <textarea className="form-control" id="directions" name="directions" rows="7" onChange={this.handleInputChange} required></textarea>
            </div>
          </fieldset>
          <input type="submit" value="Add Your Recipe" className="btn btn-danger btn-block" onClick={this.handleFormSubmit} />
        </form>
      </div>
    );
  }
}


export default AddRecipe;