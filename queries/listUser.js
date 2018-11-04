const User = require("../models/user");

module.exports = {
  async all () {
    return await User.find()
      .select("firstName lastName -_id")
      .collation({ locale: "de" })
      .sort({ lastName: 1 });
  },

  async specific (userProps) {
    return await user.findOne(userProps);
  }
};