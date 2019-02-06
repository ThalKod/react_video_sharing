const jwt = require("jsonwebtoken");
const User = require("../models/User");
const _ = require("lodash");


const createJwtToken = (user, type) => {
  console.log(_.pick(user, ["id"]));

    if(type === "refreshToken")
        return  jwt.sign({user: _.pick(user, ["id"])}, process.env.JWT_REFRESH_TOKEN_SECRET, { expiresIn: '7d' });

    return  jwt.sign({ user: user.toJSON()}, process.env.JWT_SECRET, { expiresIn: '5m' });
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

        const user = new User({ email, password});
        user.save((err, rser) =>{
            res.json({ token: "jwt " + createJwtToken(rser, "refreshToken")});
            if(err){ return next(err)}
        });
    });
};

module.exports.signIn = (req, res) => {
    // User has already had their email and passwrod auth'd, we just need to need to send back jwt
    res.json({ token: "jwt " + createJwtToken(req.user, "refreshToken")});
};

module.exports.getToken = (req, res) => {
  const token = req.headers.authorization.substring(4);
  console.log(token);
  if(token){
    jwt.verify(token, process.env.JWT_REFRESH_TOKEN_SECRET, (err, decoded) => {
      if(err)
        return res.status(401).json({"error": true, "message": 'Unauthorized access.' });
      console.log(decoded);
       User.findById(decoded.user.id)
           .then(rUser => {
             res.json({ token: "jwt " + createJwtToken(rUser, "accessToken")});
           })
           .catch(err => console.log(err));
    })
  }else{
    return res.status(403).send({
      "error": true,
      "message": 'No token provided.'
    });
  }
};


