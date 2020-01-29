const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Recipe = require("../models/recipe");
const Comment = require("../models/comment");
const Category = require("../models/category");

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
router.put("/recipes/:id", function(req, res, next) {
  Recipe.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function(
    recipe
  ) {
    res.json(recipe);
  });
});

// Delete a recipe from the database
router.delete("/recipes/:id", function(req, res, next) {
  Recipe.findByIdAndDelete({ _id: req.params.id }).then(function(recipe) {
    res.json(user);
  });
  res.send({ type: "DELETE" });
});

//********************************************************************************************* */
//  R O U T E S _ _ F O R _ _ C O M M E N T S _ _ C O L L E C T I O N

//********************************************************************************************* */

// Get list of all comments from the database
router.get("/comments", function(req, res) {
  Comment.find(req.query).then(function(comment) {
    res.json(comment);
  });
});

// Add a new comment to the database
router.post("/comments", function(req, res, next) {
  console.log(req.body); //user_ID in req.body
  //Create the comment
  Comment.create(req.body)
    .then(
      //Associate the comment to a user
      function(comment) {
        return User.findOneAndUpdate(
          { _id: req.body.user_id },
          { $push: { comments: comment._id } },
          { new: true }
        );
        //    res.json(comment);
      }
    )
    .then(user => {
      res.json(user);
    })
    .catch(next);
});
// app.post("/submit", function(req, res) {
//     // Create a new Note in the db
//     db.Note.create(req.body)
//       .then(function(dbNote) {
//         // If a Note was created successfully, find one User (there's only one) and push the new Note's _id to the User's `notes` array
//         // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
//         // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
//         return db.User.findOneAndUpdate({}, { $push: { notes: dbNote._id } }, { new: true });
//       })
//       .then(function(dbUser) {
//         // If the User was updated successfully, send it back to the client
//         res.json(dbUser);
//       })
//       .catch(function(err) {
//         // If an error occurs, send it back to the client
//         res.json(err);
//       });
//   });

// Update a comment in the database
router.put("/comments/:id", function(req, res, next) {
  Comment.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function(
    comment
  ) {
    res.json(comment);
  });
});

// Delete a comment from the database
router.delete("/comments/:id", function(req, res, next) {
  Comment.findByIdAndDelete({ _id: req.params.id }).then(function(comment) {
    res.json(comment);
  });
});

//********************************************************************************************* */
//  R O U T E S _ _ F O R _ _ C A T E G O R I E S _ _ C O L L E C T I O N

//********************************************************************************************* */

// Get list of all categories from the database
router.get("/categories", function(req, res) {
  Category.find(req.query).then(function(category) {
    res.json(category);
  });
});

// Add a new category to the database
router.post("/categories", function(req, res, next) {
  console.log(req.body);
  Category.create(req.body)
    .then(function(category) {
      res.json(category);
    })
    .catch(next);
});

// Update a category in the database
router.put("/categories/:id", function(req, res, next) {
  Category.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function(
    category
  ) {
    res.json(category);
  });
});

// Delete a category from the database
router.delete("/categories/:id", function(req, res, next) {
  Category.findByIdAndDelete({ _id: req.params.id }).then(function(category) {
    res.json(category);
  });
});

module.exports = router;
