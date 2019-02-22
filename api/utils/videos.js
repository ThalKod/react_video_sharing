const ffmpeg = require('fluent-ffmpeg');
const path = require("path");

const getDuration = (url, callback) =>{
  ffmpeg.ffprobe('https://cdn.filestackcontent.com/D15RcPMqQhmyL2m4GzmR', (err, metadata) => {
    if(err) return callback({ error: true, msg: err});
    return callback({ error: false, duration: metadata.format.duration });
  });
};

const takeScreenshot = (video, duration, callback) => {
  const pathToScreenshot = path.join(__dirname, "../data", video.handle);
  let filename;
  const proc = ffmpeg("https://cdn.filestackcontent.com/D15RcPMqQhmyL2m4GzmR")
      .on('filenames', (filenames) => {
        filename = filenames[0];
        console.log('filename : ' + filenames.join(', '));
      })
      .on('end', () => {
        return callback({ error: false, pathToScreenshot: path.join(pathToScreenshot, filename) });
      })
      .on('error', (err) => {
        return callback({ error: true, msg: err});
      })
      .takeScreenshots({ count: 1, timemarks: [ (duration / 4).toString() ], size: '150x100' }, pathToScreenshot);
};

// process vidoe by taking a getting a video dutaion and a default screenscht
module.exports.processVideo = (video) => {
  return new Promise((resolve, reject) => {
    getDuration(video.url, (res) => {
      if(res.error) reject(res.msg);
      const duration = res.duration;
      takeScreenshot(video, duration, (result) => {
        if(result.error) reject(result.msg);
        const pathToScreenshot = result.pathToScreenshot;
        resolve({duration, pathToScreenshot});
      })
    })
  })
};
