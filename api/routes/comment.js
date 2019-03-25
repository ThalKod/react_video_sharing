const express = require("express");
const { addCommentToVideo } = require("../controlers/comment");
const { requireAuth } = require("../middlewares/auth");

const router = express.Router();

router.post("/comment/video/:id", requireAuth, addCommentToVideo);


module.exports =router;
