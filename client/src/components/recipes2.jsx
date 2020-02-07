import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getRecipes } from "../utilities/api";
import PageHeader from "./page-header";
import Datatable from "./datatables";
import { MDBDataTable, MDBBtn } from "mdbreact";
const $ = require("jquery");
$.DataTable = require("datatables.net");

class Recipes2 extends Component {
  state = {
    data: {},
    recipes: []
  };
  config = [
    {
      label: "Recipe",
      field: "button",
      sort: "asc",
      width: 150
    },
    {
      label: "Category",
      field: "category",
      sort: "asc",
      width: 270
    },
    {
      label: "User",
      field: "userString",

      sort: "asc",
      width: 200
    }
  ];

  componentDidMount = () => {
    getRecipes().then(recipes => {
      recipes.forEach(recipe => {
        recipe.clickEvent = () => this.handleClick(recipe._id);
        recipe.button = (
          <MDBBtn href={`/recipe/${recipe._id}`}>{recipe.title}</MDBBtn>
        );
        recipe.userString = recipe.user.firstname + " " + recipe.user.lastname;
      });
      this.setState({ recipes: recipes });
      this.setState({ data: { rows: recipes, columns: this.config } });
    });
  };

  handleClick = id => {
    console.log(id);
    window.location = "/recipe/" + id;
  };

  render() {
    return (
      <React.Fragment>
        <PageHeader title="All Recipes" />
        <div className="table-responsive">
          <MDBDataTable data={this.state.data} />
        </div>
      </React.Fragment>
    );
  }
}

export default Recipes2;
