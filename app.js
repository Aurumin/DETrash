// External dependencies
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Internal dependencies
const keys = require("./config/keys");
const dataRoutes = require("./routes/dataRoutes");

// Connect to the database
mongoose.connect(
  keys.mongoURL,
  { useNewUrlParser: true }
);

// Start app with express
const app = express();
app.use(bodyParser);

// Use router
dataRoutes(app);

module.exports = app;
