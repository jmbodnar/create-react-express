const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Recipe Schema and Model

const RecipeSchema = new Schema({
  title: {
    type: String
  },

  category: {
    type: String
  },

  user: {
    firstname: {
      type: String
    },
    lastname: {
      type: String
    }
  },

  ingredients: [
    {
      type: String
    }
  ],

  directions: {
    type: String
  },

  likes: {
    type: Number
  },

  comments: [
    {
      user: {
        type: String
      },

      text: {
        type: String
      }
    }
  ],

  dateAdded: {
    type: Date,
    default: Date.now
  }
});

const Recipe = mongoose.model("recipe", RecipeSchema);

module.exports = Recipe;
