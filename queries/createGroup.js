const Group = require("../models/group");

module.exports = async GroupProps => {
  return await new Group(GroupProps).save();
};
