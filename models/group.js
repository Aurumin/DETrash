const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
  name: {
      type: String,
      required: true
  },
  users: {
      type: [String],
      required: true
  },
  challenges: {
      type: [String]
  }   
});

module.exports = mongoose.model("group", GroupSchema);
