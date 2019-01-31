const jwt = require("jsonwebtoken");
const User = require("../models/User");

const tokenForUser = (user) => {
    return  jwt.sign(user.toJSON(), process.env.JWT_SECRET, { expiresIn: '1h' });
};

module.exports.signUp = (req, res, next) => {
    const { email, password } = req.body;

    if(!email || !password){
        return res.status(422).send({ error: "You must provide an email and password" });
    }

    User.findOne({ email }, (err, rUser) => {
        if(err){
            return next(err);
        }

        if(rUser){
            return res.status(422).send({ error: "Already registered with this email" });
        }

        const user = new User({ email, password });
        user.save((err) =>{
            if(err){ return next(err)}
        });

        res.json({ token: "jwt " + tokenForUser(user)});
    });
};

module.exports.signIn = (req, res) => {
    // User has already had their email and passwrod auth'd, we just need to need to send back jwt
    res.json({ token: "jwt " + tokenForUser(req.user)});
};


