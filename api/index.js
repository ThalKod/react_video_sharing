const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const index = require("./routes/index.js");
require("dotenv").config();

// Mkae sure passport is initialised and don't have "unknow authentication"
require("./services/passport");

const app = express();
const port = process.env.PORT || 3080;

// Db Setting
mongoose.connect(process.env.DB_LOCAL_URL, { useNewUrlParser: true });

// App Setting
app.use(morgan("combined"));
app.use(bodyParser.json({ type: "*/*"}));
app.use(cors());

// Api Routes
index(app);

app.listen(port, () => {
    console.log(`Listenning on ${port}` );
});
