const express = require("express");
const { getBasicVideoInfoById, getDefaultImageCoverById, updateVideo } = require("../controlers/video");
const { requireAuth } = require("../middlewares/auth");
const router = express.Router();


// Video Routes

router.get("/video/basic/:id", getBasicVideoInfoById);

router.get("/video/cover/default/:id", getDefaultImageCoverById);

router.put("/video/:id", requireAuth, updateVideo);

module.exports = router;
