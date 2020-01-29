const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Comment Schema and Model

const CommentSchema = new Schema({
  recipeId: {
    type: Number
  },

  text: {
    type: String
  },

  user_id: {
    type: Schema.Types.ObjectId
  },

  dateAdded: {
    type: Date,
    default: Date.now
  }
});

const Comment = mongoose.model("comment", CommentSchema);

module.exports = Comment;
