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

// Check if username already used to signup...
module.exports.checkUsername = (req, res) => {
  User.findOne({username: req.body.username})
      .then(rUser => {
        if(!rUser) return res.send({error: false, valid: true});
        return res.send({error: false, valid: false});
      })
      .catch(err => res.send({ error: true, msg: err }));
};

module.exports.checkIfUserIsSubscriber = (req, res) => {
  const { id } = req.params;
  if(!id) return res.send({ error: true, msg: "please provide the correct params "});

  User.findOne({ _id: id, subscribers: req.user.id })
      .then((rUser) => {
          if(rUser) return res.send({ error: false, subscribed: true});
          res.send({ error: false, subscribed: false });
      })
      .catch(err => res.send({ error: false, msg: err}));
};

