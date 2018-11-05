const Create = require("../queries/createChallenge");
const Challenges = require("../models/challenge");

module.exports = {
  async createChallenge (req, res) {
    await Create.CreateChallenge(req.body);
    res.send("Challenge created");
  },

  async listChallenges(req, res) {
    res.send(
      await Challenges.find({})
      );
  }
};
