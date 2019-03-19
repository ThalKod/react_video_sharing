const express = require("express");

const { requireAuth } = require("../middlewares/auth");
const { getUser, getVideoCountByUserId, getSubscribersCountByUserId, getUserNameById } = require("../controlers/user");
const router = express.Router();

  // Users routes

  // get user info: email, username...
  router.get("/user/me", requireAuth, getUser);

  // get video count of user
  router.get("/user/:id/video/count", getVideoCountByUserId);

  // get subscribers count of user
  router.get("/user/:id/subscribers/count", getSubscribersCountByUserId);

  router.get("/user/:id/name", getUserNameById);

  module.exports = router;
