const express = require("express");
const { getBasicVideoInfoById, getDefaultImageCoverById } = require("../controlers/video");
const router = express.Router();


// Video Routes

router.get("/video/basic/:id", getBasicVideoInfoById);

router.get("/video/cover/default/:id", getDefaultImageCoverById);

module.exports = router;
