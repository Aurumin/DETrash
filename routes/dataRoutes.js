const mongoose = require("mongoose");

const userController = require("../controllers/userController");
const challengeController = require("../controllers/challengeController");
const groupController = require("../controllers/groupController");

module.exports = app => {
  // Watch for incoming requests of method get
  // to the route http://localhost:3050/api

  app.get("/api/users/createExample", userController.createExampleUser);
  app.get("/api/users/listAll", userController.listUsers);
  app.get("/api/challenges/createExample", challengeController.createExampleChallenge);
  app.post("/api/user/connectChallenge", userController.connectChallenge);
};
