const ffmpeg = require('fluent-ffmpeg');
const path = require("path");

const getDuration = (url, callback) =>{
  ffmpeg.ffprobe('https://cdn.filestackcontent.com/D15RcPMqQhmyL2m4GzmR', function(err, metadata) {
    if(err) return callback({ error: true, msg: err});
    return callback({ error: false, duration: metadata.format.duration });
  });
};

const takeScreenshot = (video, duration, callback) => {
  const pathToScreenshot = path.join(__dirname, "../data", video.handle);

  const proc = ffmpeg("https://cdn.filestackcontent.com/D15RcPMqQhmyL2m4GzmR")
      .on('filenames', function(filenames) {
        console.log('screenshots are ' + filenames.join(', '));
      })
      .on('end', function() {
        console.log("Saved !");
        const pathToScreenshot = path.join(__dirname, "../data", video.handle);
        return callback({ error: false, pathToScreenshot });
      })
      .on('error', function(err) {
        console.log("Error !");
        return callback({ error: true, msg: err});
      })
      .takeScreenshots({ count: 1, timemarks: [ (duration / 4).toString() ], size: '150x100' }, pathToScreenshot);
};

module.exports.transcodeVideo = (video) => {
  return new Promise((resolve, reject) => {
    getDuration(video.url, (res) => {
      if(res.error) reject(res.msg);
      const duration = res.duration;
      takeScreenshot(video, duration, (result) => {
        if(result.error) reject(result.msg);
        console.log(result);
        resolve(duration, result.pathToScreenshot);
      })
    })
  })
};
