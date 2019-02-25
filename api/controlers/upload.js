const Video = require("../models/Video");
const { processVideo } = require("../utils/videos");

module.exports.saveVideo = (req, res) => {
  const video = req.body;
  video.author = req.user.id;

  // Getting video duration and a default cover photo
  processVideo(video)
      .then((result) => {
        video.duration = result.duration;
        video.defaultCoverPhoto = result.pathToScreenshot;
        Video.create(video)
            .then((rVideo) => res.send({error: false, id: rVideo.id}))
            .catch(err => res.send({error: true, msg: err }));
      })
      .catch(err => res.send({ error: true, msg: err}));
};
