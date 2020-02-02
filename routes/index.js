const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Recipe = require("../models/recipe");

//********************************************************************************************* */
//  R O U T E S _ _ F O R _ _ U S E R S _ _ C O L L E C T I O N

//********************************************************************************************* */

// Get list of all users from the database
router.get("/users", function(req, res) {
  User.find(req.query).then(function(user) {
    res.json(user);
  });
});

// Add a new user to the database
router.post("/users", function(req, res, next) {
  console.log(req.body);
  User.create(req.body)
    .then(function(user) {
      res.json(user);
    })
    .catch(next);
});

// Update a user in the database
router.get("/users/:id", function(req, res, next) {
  User.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function(user) {
    res.json(user);
  });
});

// Update a user in the database
router.put("/users/:id", function(req, res, next) {
  User.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function(user) {
    res.json(user);
  });
});

// Delete a user from the database
router.delete("/users/:id", function(req, res, next) {
  User.findByIdAndDelete({ _id: req.params.id }).then(function(user) {
    res.json(user);
  });
  res.send({ type: "DELETE" });
});

//********************************************************************************************* */
//  R O U T E S _ _ F O R _ _ R E C I P E S _ _ C O L L E C T I O N

//********************************************************************************************* */

// Get list of all recipes from the database
router.get("/recipes", function(req, res) {
  Recipe.find(req.query).then(function(recipe) {
    res.json(recipe);
  });
});

// Add a new recipe to the database
router.post("/recipes", function(req, res, next) {
  console.log(req.body);
  Recipe.create(req.body)
    .then(function(recipe) {
      res.json(recipe);
    })
    .catch(next);
});

// Update a recipe in the database
router.get("/recipe/:id", function(req, res, next) {
  Recipe.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function(
    recipe
  ) {
    res.json(recipe);
  });
});

// Update a recipe in the database
router.put("/recipe/:id", function(req, res, next) {
  Recipe.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function(
    recipe
  ) {
    res.json(recipe);
  });
});

// Delete a recipe from the database
router.delete("/recipe/:id", function(req, res, next) {
  Recipe.findByIdAndDelete({ _id: req.params.id }).then(function(recipe) {
    res.json(user);
  });
  res.send({ type: "DELETE" });
});

// ===== Get, Update Recipe's Comments ===== //

// Get all of a a recipe's comments
router.get("/comment/:id", function(req, res, next) {
  Recipe.findById({ _id: req.params.id }, req.body).then(function(recipe) {
    res.json(recipe.comments);
  });
});

// Add comment to recipe
router.post("/comment/:id", function(req, res, next) {
  Recipe.findByIdAndUpdate(
    { _id: req.params.id },
    { $push: { comments: req.body } },
    { useFindAndModify: false }
  ).then(function(recipe) {
    res.json(recipe);
  });
});

module.exports = router;
