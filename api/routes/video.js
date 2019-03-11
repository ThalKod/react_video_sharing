const express = require("express");
const { getBasicVideoInfoById, getDefaultImageCoverById, updateVideo, getRecommended } = require("../controlers/video");
const { requireAuth } = require("../middlewares/auth");
const { isVideoOwner } = require("../middlewares/ownership");
const router = express.Router();


// Video Routes

router.get("/video/basic/:id", getBasicVideoInfoById);

router.get("/video/cover/default/:id", getDefaultImageCoverById);

// For now we just fetch the eight most watched video... as recommended
router.get("/video/list/recommended/", getRecommended);

router.put("/video/:id", requireAuth, isVideoOwner, updateVideo);

module.exports = router;
