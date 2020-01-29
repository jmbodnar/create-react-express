const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes/index.js");
const app = express();
const PORT = process.env.PORT || 3001;

const path = require("path");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to MongoDB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/recipesdb",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => console.log("DB connected")
);

// Define API routes here
app.use("/api", routes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
