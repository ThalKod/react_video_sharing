const filestack = require("filestack-js");

const client  = filestack.init(process.env.FILESTACK_API_KEY);

module.exports = client;
