const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChallengeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
      type: String, 
      required: true
  },
  type: {
      type: String,
      required: true
  },
//   picture: {
//       type: ...
//   }
  points: {
      type: Number,
      required: true
  },
  duration: {
      type: Number,
      required: true
  },
  location: {
      city: {
          type: String
      },
      country: {
          type: String
      }
  }

});

module.exports = mongoose.model("challenge", ChallengeSchema);
