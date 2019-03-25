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
