const fs = require("fs");
const _ = require("lodash");
const Video = require("../models/Video");

module.exports.getBasicVideoInfoById = (req, res) => {
  Video.findById(req.params.id)
      .then(rVideo => {
        if(!rVideo) return res.send({ error: true, msg: "No Video"});
        const video = _.pick(rVideo, ["name","size","duration"]);
        res.send({error: false, video });
      })
      .catch(err => res.send({ error: true, msg: err}))
};

module.exports.getDefaultImageCoverById = (req, res) => {
  Video.findById(req.params.id)
      .then(rVideo => {
        if(!rVideo) return res.send({ error: true, msg: "No Video"});
        fs.readFile(rVideo.defaultCoverPhoto, "base64", (err, base64) => {
          if(err) return console.log("err",err);
          const data = `data:image/png;base64, ${base64}`;
          res.send({ error: false, coverPhoto: data});
        });
      })
      .catch(err => res.send({ error: true, msg: err}))
};

module.exports.updateVideo = (req, res) => {
  Video.findByIdAndUpdate(req.params.id, req.body)
      .then(() => res.send({ error: false }) )
      .catch(err => {
        res.send({ error: true, msg: err})
      })
};

// TODO: basic AI for recommended video(user preference..)...
module.exports.getRecommended = (req, res) => {
  Video.find()
      .sort({ viewCount: -1})
      .limit(8)
      .then(rVideos => {
        res.send({ error: false, videos: rVideos})
      })
      .catch(err => {
        res.send({ error: true, msg: err});
      });
};

// Right now we temporary just fetch the last videos... TODO: Refactoring and Take into account the new uploaded video...
module.exports.getVideos = async (req, res) => {
  const { limit, offset } = req.query;

  Video.find()
      .sort({ createdAt: -1 })
      .skip(parseInt(offset))
      .limit(parseInt(limit))
      .then(rVideos => res.send({ error: false, videos: rVideos}))
      .catch(err => res.send({ error: true, msg: err }));
};

module.exports.getVideoById = (req, res) => {
  const { id } = req.params;

  Video.findById(id)
      .then(video => {
        if(!video) res.send({ error: true, msg: "Video Not Found"});
        res.send({ error: false, video });
      })
      .catch(err => res.send({ error: true, msg: err}));
};

// Getting similar videos by tags
module.exports.getSimilarVideosById = (req, res) => {
  const { id } = req.params;
  if(!id) return res.send({ error: true, msg: "Please provide a video id"});

  Video.findById(id)
      .then(video => {
        if(!video) res.send({ error: true, msg: "Video Not Found"});
        const tags = video.tags.map(({ text }) => text);
        console.log(tags);
        Video.find({ "tags.text": {"$in": [ ...tags]}, _id: {"$ne": video.id}})
          .then(rVideo => res.send({ error: false, videos: rVideo}))
            .catch(err => res.send({ error: true, msg: err}));
      })
      .catch(err => res.send({ error: true, msg: err}));
};

module.exports.getVideosListByUserId = (req, res) => {
  const { id } = req.params;
  const { limit, offset } = req.query;

  console.log("params", limit, offset);

  if(!id || !limit || !offset) return res.send({ error: true, msg: "Please provide the correct params"});

  Video.find({ author: id})
      .sort({ createdAt: -1 })
      .skip(parseInt(offset))
      .limit(parseInt(limit))
      .then(videos => res.send({ error:false,  videos }))
      .catch(err => res.send({ error: false, msg: err}));
};

module.exports.searchVideosByText = (req, res) => {
  const { query } = req.body;
  const { limit, offset } = req.query;

  if(!limit || !offset) return res.send({ error: true, msg: "Please provide the correct params"});

  Video.find({$text: {$search: query}})
      .sort({ createdAt: -1 })
      .skip(parseInt(offset))
      .limit(parseInt(limit))
      .then(rVideos => {
        if(rVideos.length <= 0)
          return res.send({ error: false, videos: { found: false, videos: rVideos }});

        return res.send({ error: false, videos: {found: true, videos: rVideos }});
      })
      .catch(err => res.send({ error: true, msg: err}));
};
