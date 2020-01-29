const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create User Schema and Model

const UserSchema = new Schema({
  firstname: {
    type: String,
    required: [true, "Name is required"],
    min: 2
  },

  lastname: {
    type: String,
    required: [true, "last name is required"],
    min: 2
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    min: 6,
    max: 255
  },

  dateAdded: {
    type: Date,
    default: Date.now
  },

  likedRecipes: {},
  comments: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Note model
      ref: "Comment"
    }
  ]
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
