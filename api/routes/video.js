const express = require("express");
const {
  getBasicVideoInfoById,
  getDefaultImageCoverById,
  updateVideo,
  getRecommended,
  getVideos,
  getVideoById } = require("../controlers/video");
const { requireAuth } = require("../middlewares/auth");
const { isVideoOwner } = require("../middlewares/ownership");
const router = express.Router();


// Video Routes

router.get("/video/basic/:id", getBasicVideoInfoById);

router.get("/video/cover/default/:id", getDefaultImageCoverById);

// For now we just fetch the eight most watched video... as recommended
router.get("/video/list/recommended/", getRecommended);

router.get("/video/list", getVideos); // With /video/list?limit=10&offset=5

router.get("/video/:id", getVideoById);

router.put("/video/:id", requireAuth, isVideoOwner, updateVideo);

module.exports = router;
