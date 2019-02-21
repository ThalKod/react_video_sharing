const mongoose = require("mongoose");

const videosSchema = new mongoose.Schema({
  name: {
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
  uploadDate: Date.now,
  viewCount: Number,
});

module.exports = mongoose.model("Video", videosSchema);
