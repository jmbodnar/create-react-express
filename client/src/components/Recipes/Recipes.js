import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { getAllData } from '../Recipes/JonsRepo/Services/api';
import PageHeader from '../PageHeader/PageHeader';


class Recipes extends Component {
  state = {
    recipes: [],
    categories: [],
    users: []
  };

  /**
   * Match recipe's categoryId to category's _id, return category's title
   * @param {Number | String}
   * @returns {String} Category's title string
   */
  getCategoryTitle = id => {
    const [category] = this.state.categories.filter(c => Number(id) === c._id);
    return category.title;
  };

  componentDidMount() {
    getAllData().then(data => {
      const { recipes, categories, users } = data;
      this.setState({ recipes, categories, users });
    });
  }

  render() {
    const { recipes } = this.state;
    return (
      <React.Fragment>
        <PageHeader title="Recipes" />
        <div className="table-responsive">
          <table className="table table-striped table-borderless table-hover">
            <thead className="thead-light">
              <tr>
                <th>Title</th>
                <th>Main Ingredient</th>
                <th>Category</th>
                <th>Likes</th>
              </tr>
            </thead>
            <tbody>
              {recipes.map(r => {
                return (
                  <tr key={r._id}>
                    <td>
                      <Link to={'recipes/' + r._id}>{r.title}</Link>
                    </td>
                    <td>{r.mainIngredient}</td>
                    <td>{this.getCategoryTitle(r.categoryId)}</td>
                    <td>{r.likes}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div>
        <button class="btn btn-danger" data-toggle="tooltip" title="Impress Me">
  Add Recipe<a href="/add-recipe{{add-recipe}}"></a></button>
{/* button needs to locate to bottom right */}
        </div>
      </React.Fragment>
    );
  }
}

// function Recipes() {
//   return (
//    <div>
// <h2>All Recipes Page</h2> 
      
//       </div>
   
//   );
// }



export default Recipes;