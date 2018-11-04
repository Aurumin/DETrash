const User = require("../models/challenge");

module.exports = async ChallengeProps => {
  return await new User(ChallengeProps).save();
};
