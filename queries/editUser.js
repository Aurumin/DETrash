const User = require("../models/user");

module.exports = {
    async general (UserID, UserProps) {
        return await User.findeById(UserID)
        .update(UserProps)
    },
  
    async challenge (UserID, ChallengeID) {
      return await user.findeById(UserID)
      .challenges
      .push({id: ChallengeID})
      .save();
    }
  };
