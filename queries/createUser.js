const User = require("../models/user");

module.exports = async UserProps => {
  return await new User(UserProps).save();
};
