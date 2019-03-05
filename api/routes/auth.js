const express = require("express");
const { requireSignin } = require("../middlewares/auth");
const { signUp, signIn, getToken } = require("../controlers/auth.js");
const router = express.Router();


    // Index Routes
router.post("/signin", requireSignin, signIn);
router.post("/signup", signUp);
router.get("/token", getToken);

module.exports = router;
