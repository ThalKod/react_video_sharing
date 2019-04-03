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
    type: mongoose.Schema.ObjectId,
    ref: "User"
  },
  defaultCoverPhoto: String,
  description: String,
  tags: [],
  viewCount: {
    type: Number,
    default: 0
  },
}, {timestamps: true});

videosSchema.index({name: 'text', description: 'text'});

module.exports = mongoose.model("Video", videosSchema);
