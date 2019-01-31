const passport = require("passport");
const User = require("../models/User");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const LocalStrategy = require("passport-local").Strategy;


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
        if(!rUser){
            return done(null, false);
        }
        // Compare password
        rUser.comparePassword(password, (err, isMatch) => {
            if(err) { return done(err) }
            if(!isMatch){ return done(null, false) }

            return done(null, rUser);
        });
    }).catch((err) => {
        return done(err);
    });
});

// create JWT Strategy
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
    User.findById(payload.sub).then((rUser) => {
        if(!rUser){
            return done(null, false);
        }
        done(null,rUser);
    }).catch((err) => {
         done(err, false)
    });
});

// Tell passport to use the strategy
passport.use(jwtLogin);
passport.use(localLogin);
