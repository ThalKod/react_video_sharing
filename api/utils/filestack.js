const filestackClient = require("../services/filestack");
const fs = require('fs');

const removeFile = (path) => {
  fs.unlink(path, (err) => {
    if(err) console.log("Error While deleting file at :", path);
  })
};

module.exports.uploadFilesFromFS = (filePath) => {
  return new Promise((resolve, reject) => {
    filestackClient.upload(filePath)
        .then((res) => {
          resolve(res);
          removeFile(filePath); // no longer need the file
        })
        .catch((err) => {
          reject(err);
        })
  })
};
