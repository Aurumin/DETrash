const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
  friends: {
    type: [String]
  },
  challenges: {
    type: [],
    id: {
      type: String
    },
    started: {
      type: Date,
    },
    finished: {
      type: Date
    },
    entries: {
      type: [],
      date: {
        type: Date
      },
      acomplished: {
        type: Boolean
      }
    }
  }
});

module.exports = mongoose.model("user", UserSchema);
