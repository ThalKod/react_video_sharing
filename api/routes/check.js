const User = require("../models/User");
const { checkEmail, checkUsername } = require("../controlers/check");

module.exports = (app) => {
  // Check routes
  app.post("/api/v0/check/email", checkEmail);
  app.post("/api/v0/check/username", checkUsername);
};
