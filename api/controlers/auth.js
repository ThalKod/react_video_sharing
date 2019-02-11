const jwt = require("jsonwebtoken");
const _ = require("lodash");

const User = require("../models/User");


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
        user.save((err, rUser) => {
          if(err) return next(err);
          const jwtToken = createJwtToken(rUser, "refreshToken");
          return res.json({ token: `jwt ${jwtToken}`});
        });
    });
};

module.exports.signIn = (req, res) => {
  console.log("hey");
    // User has already had their email and passwrod auth'd, we just need to need to send back jwt
  const jwtToken = createJwtToken(req.user, "refreshToken");
  return res.json({ token: `jwt ${jwtToken}`});
};

module.exports.getToken = (req, res) => {
  const token = req.headers.authorization.substring(4);
  console.log(token);
  if(token){
    jwt.verify(token, process.env.JWT_REFRESH_TOKEN_SECRET, (err, decoded) => {
      console.log(err);
      if(err)
        return res.status(401).json({"error": true, "message": 'Unauthorized access.' });
      console.log(decoded);
       User.findById(decoded.user.id)
           .then(rUser => {
             const jwtToken = createJwtToken(rUser, "accessToken");
             res.json({ token: `jwt ${jwtToken}` });
           })
           .catch(err => console.log(err));

       return false;
    })
  }else{
    return res.status(403).send({
      "error": true,
      "message": 'No token provided.'
    });
  }
};


