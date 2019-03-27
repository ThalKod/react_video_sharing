const Comment = require("../models/comment");

module.exports.addCommentToVideo = (req, res) => {
  const { id } = req.params;
  if(!id) res.send({ error: true, msg: "Please provide video id "});

  console.log(req.body);
  const comment = {
    text: req.body.commentText,
    author:  req.user.id,
    video: id
  };

  Comment.create(comment)
      .then((comment) => {
        comment.populate("author", "username", (err, doc) => {
          if(err) return res.send({ error: true, msg: err});
          res.send({ error: false, comment: doc});
        })
      })
      .catch(err => console.log(err));
};

module.exports.getCommentCountOfVideo = (req, res) => {
  const { id } = req.params;
  if(!id) res.send({ error: true, msg: "Please provide video id "});

  Comment.count({ video: id })
      .then(count => res.send({ error: false, count}))
      .catch(err => res.send({ error: true, msg: err}));
};

module.exports.getVideoComment = (req, res) => {
  const { id } = req.params;
  const { limit, offset = 0 } = req.query;

  if(!id || ! limit ) return res.send({ error: true, msg: "Please provide the correct params"});

  Comment.find({ video: id })
      .sort({ createdAt: -1 })
      .skip(parseInt(offset))
      .limit(parseInt(limit))
      .populate("author", "username")
      .then(rComments => {
        res.send({ error: false, comments: rComments});
      })
      .catch(err => res.send({ error: true, msg: err}));
};
