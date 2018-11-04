const Mongoose = require("mongoose");

const User = require("../models/user");

const Create = require("../queries/createChallenge");

module.exports = {
  async createExampleChallenge(req, res) {
    res.send(
      await Create({
        name: "Example Challenge",
        description: "First Challenge",
        type: "userChallenge",
        points: 10,
        duration: 3,
        location: {
            city: "Berlin",
            country: "Germany"
        }
      })
    );
  }
};
