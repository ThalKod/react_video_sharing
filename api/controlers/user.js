const User = require("../models/User");
const Video = require("../models/Video");

module.exports.getUser = (req, res) => {
  User.findById(req.user.id)
      .then(({ email, username, _id }) => {
        if(!_id) return res.send({ error: true, msg: "No users record"});

        res.send({ error: false, user: { email, username, _id } })
      })
      .catch(err => res.send({error: true, msg: err}));
};

module.exports.getVideoCountByUserId = (req, res) => {
  const { id } = req.params;
  if(!id) return res.send({ error: true, msg: "Please provide a user id"});

  Video.find({ author: id })
      .then(rVideo => {
        if(!rVideo) return res.send({ error: true, msg: "No videos record"});

        res.send({ error: false, videosCount: rVideo.length})
      })
      .catch(err => res.send({ error: true, msg: err }));
};

module.exports.getSubscribersCountByUserId = (req, res) => {
  const { id } = req.params;
  if(!id) return res.send({ error: true, msg: "Please provide a user id"});

  User.findById(id)
      .then((rUser) => {
        if(!rUser) return res.send({ error: true, msg: "No user record"});

        res.send({ error: false, subscribersCount: rUser.subscribersCount})
      })
      .catch(err => res.send({error: true, msg: err}));
};

module.exports.getUserNameById = (req, res) => {
  const { id } = req.params;
  if(!id) return res.send({ error: true, msg: "Please provide a user id"});

  User.findById(id)
      .then(({ username }) => {
        if(!username) return res.send({ error: true, msg: "No user record"});
        res.send({ error: false, username})
      })
      .catch(err => res.send({error: true, msg: err}));
};

module.exports.addSubscribersByUserId = (req, res) => {
  const { id } = req.params;
  if(!id) return res.send({ error: true, msg: "Please provide a user id"});

  User.findById(id)
      .then((rUser) => {
        if(!rUser) return res.send({ error: true, msg: "No user found"});

        rUser.subscribersCount += 1;
        rUser.subscribers.push(req.user.id);
        rUser.save();

        return res.send({ error: false });
      })
      .catch((err) => {
        res.send({ error: true, msg: err})
      });
};


module.exports.getUserSubscriberListById = (req, res) => {
  const { id } = req.params;
  const { limit, offset } = req.query;

  if(!id || !limit || !offset) return res.send({ error: true, msg: "Please provide the correct params"});

  User.find({ subscribers: id})
      .skip(parseInt(offset))
      .limit(parseInt(limit))
      .select("username subscribersCount")
      .then(rUsers => {
        if(!rUsers) return res.send({ error: true, msg: "Internal server record"});

        res.send({ error: false, channels: rUsers });
      })
      .catch(err => res.send({ error: false, msg: err}));
};
