const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const {ExtractJwt} = require("passport-jwt");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User");



// Setup options for Strategies
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
    secretOrKey: process.env.JWT_SECRET
};

const localOptions = {
    usernameField: "email"
};

// create Local Strategy
const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
    User.findOne({ email }).then((rUser) => {
      console.log(rUser);
        if(!rUser){
          console.log("not here");
            return done(null, false);
        }
        // Compare password
        rUser.comparePassword(password, (err, isMatch) => {
          console.log(err);
            if(err) { return done(err) }
            console.log(isMatch);
            if(!isMatch){ return done(null, false) }

            done(null, { id: rUser._id});
        });
    }).catch((err) => {
        done(err);
    });
});

// create JWT Strategy
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
    User.findById(payload.user._id).then((rUser) => {
        if(!rUser){
            return done(null, false);
        }
        return done(null,{ id: rUser._id});
    }).catch((err) => {
         done(err, false)
    });
});

// Tell passport to use the strategy
passport.use(jwtLogin);
passport.use(localLogin);
