const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const auth = require("./routes/auth");
const check = require("./routes/check");
const user = require("./routes/user");

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

// Mkae sure passport is initialised and don't have "unknow authentication"
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

const server = app.listen(port, () => {
    console.log(`Listenning on ${port}` );
});

module.exports = server;
