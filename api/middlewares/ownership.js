const Video = require("../models/Video");

module.exports.isVideoOwner = (req, res, next) => {
  Video.findById(req.params.id)
      .then(rVideo => {
        if(!rVideo) return res.send({ error: true, msg: "No video"});
        if(rVideo.author.equals(req.user.id)) next();
      })
      .catch(err => {
        res.send({ error: true, msg: err});
      })
};
