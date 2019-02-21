const express = require("express");
const { requireAuth } = require("../middlewares/auth");
const { saveVideo } = require("../controlers/upload");
const router = express.Router();

// Upload Routes

// Initially save a video file into document model before transcoding
router.post("/upload/video", requireAuth, saveVideo);

module.exports = router;
