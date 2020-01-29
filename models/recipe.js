const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Recipe Schema and Model

const RecipeSchema = new Schema({
  title: {
    type: String
  },

  categoryId: {
    type: Number
  },

  mainIngredient: {
    type: String
  },

  ingredients: {
    type: String
  },

  directions: {
    type: String
  },

  likes: {
    type: Number
  },

  userId: {
    type: Number
  },

  dateAdded: {
    type: Date,
    default: Date.now
  }
});

const Recipe = mongoose.model("recipe", RecipeSchema);

module.exports = Recipe;
