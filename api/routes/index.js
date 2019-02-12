const { requireAuth, requireSignin } = require("../middlewares/auth");
const userRoutes = require("./user");
const checkRoutes = require("./check");
const { signUp, signIn, getToken } = require("../controlers/auth.js");


module.exports = (app) => {
    // Index Routes
    app.post("/api/v0/signin", requireSignin, signIn);
    app.post("/api/v0/signup", signUp);
    app.get("/api/v0/token", getToken);

    userRoutes(app);
    checkRoutes(app);
};
