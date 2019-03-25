const express = require("express");
const { addCommentToVideo, getCommentCountOfVideo } = require("../controlers/comment");
const { requireAuth } = require("../middlewares/auth");

const router = express.Router();

router.post("/comment/video/:id", requireAuth, addCommentToVideo);

router.get("/comment/count/video/:id", getCommentCountOfVideo);

module.exports = router;
