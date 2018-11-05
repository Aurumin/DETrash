const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EntriesSubSchema = new Schema({
  date: {
    type: Date
  },
  done: {
    type: Boolean
  }
}, { _id : false });

const ChallengesSubSchema = new Schema({  
  id: {
      type: String
  },  
  started: {
      type: Date,
  },
  finished: {
      type: Date
  },
  entries: [EntriesSubSchema]
}, { _id : false });

const FriendsSubSchema = new Schema({
  id: {
    type: String
  }
});

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  userName: {
    type: String, 
    required: true
  },
  // profilePicture: {
  //   type: String
  // },
  facebookToken: {
    type: String
  },
  score: {
    type: String, 
    default: 0
  },
  friends: [FriendsSubSchema],  
  challenges: [ChallengesSubSchema]
});

module.exports = mongoose.model("user", UserSchema);
