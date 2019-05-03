const filestackClient = require("../services/filestack");

module.exports.uploadFilesFromFS = (filePath) => {
  return new Promise((resolve, reject) => {
    filestackClient.upload(filePath)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        })
  })
};
