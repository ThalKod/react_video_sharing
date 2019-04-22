const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  text: String,
  author: {
    type: mongoose.Schema.ObjectId,
    ref: "User"
  },
  video: {
    type: mongoose.Schema.ObjectId,
    ref: "Video"
  },
  reply: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Comment"
    }
  ],
  isReply: {
    type: Boolean,
    default: false
  }
}, {timestamps: true});

module.exports = mongoose.model("Comment", commentSchema);
