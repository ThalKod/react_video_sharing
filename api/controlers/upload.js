const Video = require("../models/Video");
const { processVideo } = require("../utils/videos");
const { uploadFilesFromFS } = require("../utils/filestack");

module.exports.saveVideo = (req, res) => {
  const video = req.body;
  video.author = req.user.id;

  // Getting video duration and upload a default cover photo to filestack
  processVideo(video)
      .then((result) => {
        uploadFilesFromFS(result.pathToScreenshot)
            .then(({ url }) => {
              video.duration = result.duration;
              video.defaultCoverPhoto = url;
              Video.create(video)
                  .then((rVideo) => res.send({error: false, id: rVideo.id}))
                  .catch(err => res.send({error: true, msg: err }));
            })
            .catch(err => res.send({error: true, msg: err }));
      })
      .catch(err => res.send({ error: true, msg: err}));
};
