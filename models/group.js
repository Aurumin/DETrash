const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GroupChallenges = new Schema({
    id: {
        type: String
    }
}, {__id: false});

const GroupSchema = new Schema({
  name: {
      type: String,
      required: true
  },
  users: {
      type: [String],
      required: true
  },
  challenges: [GroupChallenges]   
});

module.exports = mongoose.model("group", GroupSchema);
