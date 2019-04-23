const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  text: String,
  author: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    autopopulate: true
  },
  video: {
    type: mongoose.Schema.ObjectId,
    ref: "Video"
  },
  reply: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Comment",
      autopopulate: true
    }
  ],
  isReply: {
    type: Boolean,
    default: false
  }
}, {timestamps: true});

commentSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model("Comment", commentSchema);
