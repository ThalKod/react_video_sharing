const express = require("express");

const { requireAuth } = require("../middlewares/auth");
const { getUser } = require("../controlers/user");
const router = express.Router();

  // Users routes

  // return user info: email, username...
  router.get("/user/me", requireAuth, getUser);

  module.exports = router;
