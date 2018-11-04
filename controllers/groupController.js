const Mongoose = require("mongoose");

const Group = require("../models/group");

const Create = require("../queries/createGroup");

module.exports = {
  async createExampleGroup(req, res) {
    res.send(
      await Create({
        lastName: "Pan",
        firstName: "Peter"
      })
    );
  }
};
