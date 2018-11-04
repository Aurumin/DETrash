const User = require("../models/group");

module.exports = async GroupProps => {
  return await new User(GroupProps).save();
};
