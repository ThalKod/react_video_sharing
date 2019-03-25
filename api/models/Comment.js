const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  text: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
}, {timestamps: true});

module.exports = mongoose.model("Comment", commentSchema);
