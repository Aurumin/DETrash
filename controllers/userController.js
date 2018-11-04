const Mongoose = require("mongoose");

const User = require("../models/user");

const Create = require("../queries/createUser");
const List = require("../queries/listUser");

module.exports = {
  async createExampleUser(req, res) {
    res.send(
      await Create({
        lastName: "Pan",
        firstName: "Peter"
      })
    );
  },

  async listUsers(req, res) {
    res.send(await List.all());
  }
};
