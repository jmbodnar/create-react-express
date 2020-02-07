import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getRecipes } from "../utilities/api";
import PageHeader from "./page-header";

class Recipes extends Component {
  state = {
    recipes: []
  };

  componentDidMount() {
    getRecipes().then(recipes => {
      console.log("x", recipes);
      this.setState({ recipes });
    });
  }

  render() {
    const { recipes } = this.state;
    //console.log(recipes);
    return (
      <React.Fragment>
        <PageHeader title="All Recipes" />
        <div className="table-responsive">
          <table className="table table-striped table-borderless table-hover">
            <thead className="thead-light">
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>User</th>
                <th>Likes</th>
              </tr>
            </thead>
            <tbody>
              {recipes.map(r => {
                if (r.user) {
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
                }
              })}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default Recipes;
