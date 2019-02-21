const Video = require("../models/Video");
const { transcodeVideo } = require("../utils/videos");

module.exports.saveVideo = (req, res) => {
  const video = req.body;
  video.author = req.user.id;

  transcodeVideo(video)
      .then((duration, path) => {
        console.log({duration, path});
        res.send({duration, path});
      })
      .catch(err => res.send({ error: true, msg: err}));
};
