const passport = require("passport");


module.exports.requireAuth = passport.authenticate("jwt", { session: false });

module.exports.requireSignin = passport.authenticate("local", { session: false });
