const User = require("../models/User");
const Video = require("../models/Video");

module.exports.getUser = (req, res) => {
  User.findById(req.user.id)
      .then(({ email, username, _id }) => res.send({ error: false, user: { email, username, _id } }))
      .catch(err => res.send({error: true, msg: err}));
};

module.exports.getVideoCountByUserId = (req, res) => {
  const { id } = req.params;
  if(!id) return res.send({ error: true, msg: "Please provide a user id"});

  Video.find({ author: id })
      .then(rVideo => {
        res.send({ error: false, videosCount: rVideo.length})
      })
      .catch(err => res.send({ error: true, msg: err }));
};

module.exports.getSubscribersCountByUserId = (req, res) => {
  const { id } = req.params;
  if(!id) return res.send({ error: true, msg: "Please provide a user id"});

  User.findById(id)
      .then(({ subscribersCount }) => res.send({ error: false, subscribersCount}))
      .catch(err => res.send({error: true, msg: err}));
};

module.exports.getUserNameById = (req, res) => {
  const { id } = req.params;
  if(!id) return res.send({ error: true, msg: "Please provide a user id"});

  User.findById(id)
      .then(({ username }) => res.send({ error: false, username}))
      .catch(err => res.send({error: true, msg: err}));
};
