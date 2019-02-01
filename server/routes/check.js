const User = require("../models/User");
const { checkEmail } = require("../controlers/check");

module.exports = (app) => {
  // Check routes
  app.post("/api/v0/check/email", checkEmail);
};
