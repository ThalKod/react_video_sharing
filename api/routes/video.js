const express = require("express");
const { getBasicVideoInfoById } = require("../controlers/video");
const router = express.Router();


// Video Routes

router.get("/video/basic/:id", getBasicVideoInfoById);

module.exports = router;
