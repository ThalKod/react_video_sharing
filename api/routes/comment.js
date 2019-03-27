const express = require("express");
const { addCommentToVideo,
  getCommentCountOfVideo,
  getVideoComment } = require("../controlers/comment");
const { requireAuth } = require("../middlewares/auth");

const router = express.Router();

router.post("/comment/video/:id", requireAuth, addCommentToVideo);

router.get("/comment/count/video/:id", getCommentCountOfVideo);

router.get("/comment/video/:id", getVideoComment);


module.exports = router;
