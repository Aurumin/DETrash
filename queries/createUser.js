const User = require("../models/user");

module.exports = async StudentProps => {
  return await new User(StudentProps).save();
};
