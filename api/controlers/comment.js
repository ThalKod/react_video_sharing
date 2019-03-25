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
      .then(() => res.send({ error: false }))
      .catch(err => res.send({ error: true, msg: err }));
};

module.exports.getCommentCountOfVideo = (req, res) => {
  const { id } = req.params;
  if(!id) res.send({ error: true, msg: "Please provide video id "});

  Comment.count({ video: id })
      .then(count => res.send({ error: false, count}))
      .catch(err => res.send({ error: true, msg: err}));
};
