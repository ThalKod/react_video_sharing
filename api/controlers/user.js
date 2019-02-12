const User = require("../models/User");

module.exports.getUser = (req, res) => {
  User.findById(req.user.id)
      .then(({ email, username }) => res.send({ error: false, user: { email, username } }))
      .catch(err => res.send({error: true, msg: err}));
};
