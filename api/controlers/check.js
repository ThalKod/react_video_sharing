const User = require("../models/User");


// Check if email already used to signup...
module.exports.checkEmail = (req, res) => {
  User.findOne({email: req.body.email})
      .then(rUser => {
        if(!rUser) return res.send({error: false, valid: true});
        return res.send({error: false, valid: false});
      })
      .catch(err => res.send({ error: true, msg: err }));
};

