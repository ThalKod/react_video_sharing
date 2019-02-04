const { signUp, signIn, getToken } = require("../controlers/auth.js");
const passport = require("passport");

const requireAuth = passport.authenticate("jwt", { session: false });
const requireSignin = passport.authenticate("local", { session: false });

module.exports = (app) => {
    // Index Routes
    app.post("/api/v0/signin", requireSignin, signIn);
    app.post("/api/v0/signup", signUp);
    app.post("/api/v0/token", getToken);

    app.get("/", requireAuth, (req, res) => {
        res.send(req.user);
    })
};
