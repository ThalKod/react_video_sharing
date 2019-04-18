const express = require("express");

const { requireAuth } = require("../middlewares/auth");

const {
  checkEmail,
  checkUsername,
  checkIfUserIsSubscriber
} = require("../controlers/check");
const router = express.Router();

  // Check routes
  router.post("/check/email", checkEmail);
  router.post("/check/username", checkUsername);
  router.post("/check/subscribers/:id", requireAuth, checkIfUserIsSubscriber);

  module.exports = router;
