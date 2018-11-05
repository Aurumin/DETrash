const Create = require("../queries/createUser");
const List = require("../queries/listUser");
const Edit = require("../queries/editUser");

module.exports = {
  async createUser(req, res) {
    res.send( 
      await Create(req.body)
    );
  },

  async joinChallenge(req, res) {
    res.send(await Edit.joinChallenge(req.body.userID, req.body.challengeID));
  },

  async quitChallenge(req, res) {
    await(Edit.quitChallenge(req.body.userID, req.body.challengeID));
    res.send("Quit");
  },

  async listAll(req, res) {
    res.send(await List.all());
  },

  async listOne(req, res) {   
    res.send(await List.specific(req.body.userID))
  },

  async updateUsage(req, res) {
    res.send(await Edit.updateUsage(req.body.userID, req.body.challengeID, req.body.date, req.body.done));
  }
};
