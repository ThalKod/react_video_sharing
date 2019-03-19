const User = require("../models/User");
const Video = require("../models/Video");

module.exports.getUser = (req, res) => {
  User.findById(req.user.id)
      .then(({ email, username }) => res.send({ error: false, user: { email, username } }))
      .catch(err => res.send({error: true, msg: err}));
};

module.exports.getVideoCountByUserId = (req, res) => {
  const { id } = req.params;
  if(!id) return res.send({ error: true, msg: "Please provide a user id"});

  Video.find({ author: id })
      .then(rVideo => {
        res.send({ error: false, count: rVideo.length})
      })
      .catch(err => res.send({ error: true, msg: err }));
};
