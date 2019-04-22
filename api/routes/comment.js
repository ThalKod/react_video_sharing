const express = require("express");
const {
  addCommentToVideo,
  getCommentCountOfVideo,
  getVideoComment,
  addReplyToCommentById } = require("../controlers/comment");
const { requireAuth } = require("../middlewares/auth");

const router = express.Router();

router.post("/comment/video/:id", requireAuth, addCommentToVideo);

router.get("/comment/count/video/:id", getCommentCountOfVideo);

router.get("/comment/video/:id", getVideoComment);

router.post("/comment/reply/:id", requireAuth, addReplyToCommentById);

module.exports = router;
