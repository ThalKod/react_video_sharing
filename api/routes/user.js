const { requireAuth } = require("../middlewares/auth");

const { getUser } = require("../controlers/user");

module.exports = (app) => {
  // Users routes

  // return user info: email, username...
  app.get("/api/v0/user/me", requireAuth, getUser);
};
