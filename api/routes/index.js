const express = require("express");
const { requireAuth, requireSignin } = require("../middlewares/auth");
const userRoutes = require("./user");
const checkRoutes = require("./check");
const { signUp, signIn, getToken } = require("../controlers/auth.js");
const router = express.Router();


    // Index Routes
router.post("/signin", requireSignin, signIn);
router.post("/signup", signUp);
router.get("/token", getToken);

module.exports = router;
