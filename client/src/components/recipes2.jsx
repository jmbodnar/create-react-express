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
      label: "Title",
      field: "button",
      attributes: {
        style: { color: "green" }
      },
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
    },
    {
      label: "Likes",
      field: "likes",
      sort: "asc",
      width: 200
    }
  ];

  componentDidMount = () => {
    console.log("1", this);
    getRecipes().then(recipes => {
      console.log("2", recipes);
      recipes.forEach(recipe => {
        recipe.clickEvent = () => this.handleClick(recipe._id);
        recipe.button = (
          <MDBBtn href={`/recipe/${recipe._id}`} color="primary">
            {recipe.title}
          </MDBBtn>
        );
        recipe.userString = recipe.user.firstname + recipe.user.lastname;
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
    // const { recipes } = this.state;
    return (
      <React.Fragment>
        <PageHeader title="All Recipes" />
        <div className="table-responsive">
          {/* <table
            id="table_id"
            className="table table-striped table-borderless table-hover"
          >
            <thead className="thead-light">
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>User</th>
                <th>Likes</th>
              </tr>
            </thead>
            <tbody>
              {this.state.recipes.length
                ? this.state.recipes.map(r => {
                    return (
                      <tr key={r._id}>
                        <td>
                          <Link to={"recipe/" + r._id}>{r.title}</Link>
                        </td>
                        <td>{r.category}</td>
                        <td>{r.user.firstname + " " + r.user.lastname}</td>
                        <td>{r.likes}</td>
                      </tr>
                    );
                  })
                : "swhere them recipes"}
            </tbody>
          </table> */}
          <MDBDataTable data={this.state.data} />
        </div>
        <script>
          document.addEventListener("DOMContentLoaded", function()
          {/* $("#table_id").DataTable() }); */}
        </script>
      </React.Fragment>
    );
  }
}

export default Recipes2;
