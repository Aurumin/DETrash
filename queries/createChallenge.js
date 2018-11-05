const Challenge = require("../models/challenge");

module.exports = {
  async CreateChallenge (ChallengeProps) {
    return await new Challenge(ChallengeProps).save();
  } 
};
