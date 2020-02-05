const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create User Schema and Model

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    min: 2
  },

  // lastname: {
  //   type: String,
  //   required: [true, "last name is required"],
  //   min: 2
  // },

  email: {
    type: String,
    required: [true, "Email is required"],
    min: 6,
    max: 255
  },

  dateAdded: {
    type: Date,
    default: Date.now
  }
});

const user = mongoose.model("user", userSchema);

module.exports = user;
