const express = require("express");

const { checkEmail, checkUsername } = require("../controlers/check");
const router = express.Router();

  // Check routes
  router.post("/check/email", checkEmail);
  router.post("/check/username", checkUsername);

  module.exports = router;
