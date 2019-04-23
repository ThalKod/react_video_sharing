const Comment = require("../models/Comment");

module.exports.addCommentToVideo = (req, res) => {
  const { id } = req.params;
  if(!id) res.send({ error: true, msg: "Please provide video id "});

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

  Comment.find({ video: id, isReply: false })
      .sort({ createdAt: -1 })
      .skip(parseInt(offset))
      .limit(parseInt(limit))
      .populate({
          path: "reply",
          populate: { path: "author", select: "username" }
        })
      .populate({ path: "author", select: "username"})
      .then(rComments => {
        res.send({ error: false, comments: rComments});
      })
      .catch(err =>{
        res.send({ error: true, msg: err});
      });
};


module.exports.addReplyToCommentById = (req, res) => {
  const { id } = req.params;
  if(!id) res.send({ error: true, msg: "Please provide comment id "});

  const comment = {
    text: req.body.commentText,
    author:  req.user.id,
    isReply: true
  };

  Comment.findById(id)
      .then(async (rComment) => {
        if(!rComment) return res.send({ error: true, msg: "No Comment record"});

        comment.video = rComment.video;
        const newComment = await Comment.create(comment);

        newComment.populate("author", "username", (err, result) => {
          if(err) return res.send({ error: true, msg: err});

          rComment.reply.push(newComment);
          rComment.save();

          return res.send({ error: false, comment: result });
        });
      })
      .catch(err => console.log(err));
};
