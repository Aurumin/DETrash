const Create = require("../queries/createUser");
const List = require("../queries/listUser");
const Edit = require("../queries/editUser");

module.exports = {
  async createExampleUser(req, res) {
    res.send(
      await Create({
        lastName: "Pan",
        firstName: "Peter",
        userName: "peterpan"
      })
    );
  },

  async connectChallenge(req, res) {
    console.log(req);
    // await Edit.challenge(req.userID, req.challengeID);
    res.send("done");
  },

  async listUsers(req, res) {
    res.send(await List.all());
  }
};
