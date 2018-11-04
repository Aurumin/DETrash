const Challenge = require("../models/challenge");

module.exports = async ChallengeProps => {
  return await new Challenge(ChallengeProps).save();
};
