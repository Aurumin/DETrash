const mongoose = require("mongoose");

const userController = require("../controllers/userController");

module.exports = app => {
  // Watch for incoming requests of method get
  // to the route http://localhost:3050/api

  app.get("/api/users/create", userController.createExampleUser);
  app.get("/api/users/list", userController.listUsers);
};
