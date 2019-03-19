const express = require("express");

const { requireAuth } = require("../middlewares/auth");
const { getUser, getVideoCountByUserId, getSubscribersCountByUserId } = require("../controlers/user");
const router = express.Router();

  // Users routes

  // return user info: email, username...
  router.get("/user/me", requireAuth, getUser);

  router.get("/user/:id/video/count", getVideoCountByUserId);

  router.get("/user/:id/subscribers/count", getSubscribersCountByUserId);

  module.exports = router;
