const User = require("../models/user");

module.exports = {
    async general (userID, userProps) {
        return await User.findeById(userID)
        .update(userProps)
    },
  
    async joinChallenge (userID, challengeID) {
        return await User.findByIdAndUpdate(userID, {$push: {challenges: {id: challengeID}}});
    }, 

    async quitChallenge (userID, challengeID) {
        return await User.findByIdAndUpdate(userID, {$pull: {challenges: {id: challengeID}}});
    },

    async updateUsage(userID, challengeID, date, done) {
        
        return await User.findOneAndUpdate(
            {"_id": userID, "challenges._id": challengeID },
            {
                "$push": {
                    "challenges.$.entries": {date, done}
                }
            }
        )       // .challenges.findByIdAndUpdate(challengeID, {$push: {entries: {date, done}}})
    }   
  };
