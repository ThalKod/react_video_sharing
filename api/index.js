const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

// Prevent .env dev variable on deployement...
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

// API routes
const auth = require("./routes/auth");
const check = require("./routes/check");
const user = require("./routes/user");
const upload = require("./routes/upload");
const video = require("./routes/video");
const comment = require("./routes/comment");

// Initialise passport
require("./services/passport");

const app = express();
const port = process.env.PORT || 3080;

// Db Setting
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });

// App Setting
app.use(morgan("combined"));
app.use(bodyParser.json({ type: "*/*"}));
app.use(cors());

// Api Routes
app.use(process.env.API_BASE_URL, auth);
app.use(process.env.API_BASE_URL, check);
app.use(process.env.API_BASE_URL, user);
app.use(process.env.API_BASE_URL, upload);
app.use(process.env.API_BASE_URL, video);
app.use(process.env.API_BASE_URL, comment);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../build")));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
  })
}

const server = app.listen(port, () => {
    console.log(`Listenning on ${port}` );
});

module.exports = server;
