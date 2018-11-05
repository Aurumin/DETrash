const userController = require("../controllers/userController");
const challengeController = require("../controllers/challengeController");
const groupController = require("../controllers/groupController");

module.exports = app => {
  // Watch for incoming requests of method get
  // to the route http://localhost:3050/api

  // Users
  // GET
  app.get("/api/users/listAll", userController.listAll);
  

  // POST
  app.post("/api/users/createUser", userController.createUser);
  app.post("/api/users/listOne", userController.listOne);

  // Challenges
  // GET
  app.get("/api/challenges/list", challengeController.listChallenges);

  // POST
  app.post("/api/challenges/join", userController.joinChallenge);
  app.post("/api/challenges/quit", userController.quitChallenge);
  app.post("/api/challenges/create", challengeController.createChallenge);
  app.post("/api/challenges/updateUsage", userController.updateUsage);

  // Groups
  // GET
  

  // POST


  // Feed
  // GET

  // POST 


};
