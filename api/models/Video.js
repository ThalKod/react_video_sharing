const mongoose = require("mongoose");

const videosSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    require: true
  },
  handle: {
    type: String,
    unique: true,
    require: true
  },
  mimeType: String,
  url: {
    type: String,
    unique: true,
    require: true,
  },
  duration: Number,
  size: Number,
  author: {
    type: mongoose.Types.ObjectId,
    ref: "User"
  },
  defaultCoverPhoto: String,
  description: String,
  tags: [],
  uploadDate: {
    type: Date,
    default: Date.now,
  },
  viewCount: {
    type: Number,
    default: 0
  },
});

module.exports = mongoose.model("Video", videosSchema);
