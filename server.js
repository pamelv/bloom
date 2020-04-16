require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const path = require("path");
<<<<<<< HEAD
const API= require("./routes/api");
const mongoose = require("mongoose");
const cors = require("cors");

=======
const API = require("./routes/api");
const mongoose = require("mongoose");
const cors = require("cors");
>>>>>>> master

/* constants */
const PORT = process.env.PORT || 3001;

const corsOptions = {
  origin: true,
  credentials: true,
};



mongoose.connect(
  process.env.MONGODB_URI ||
    `mongodb://bloom:${process.env.DB_PASSWORD}@ds263248.mlab.com:63248/heroku_m4bk3m41`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("client/build"));

/* set-up middlewares */
app.use(morgan("dev")); // logging

app.use(API);

app.options("*", cors(corsOptions));

<<<<<<< HEAD
// app.use("/", pages);
app.get("*", (req, res) =>
  res.sendFile(path.resolve("client", "build", "index.html"))
);

=======
app.get("*", (req, res) =>
  res.sendFile(path.resolve("client", "build", "index.html"))
);
>>>>>>> master

/* run our app */
app.listen(PORT, () => {
  console.log(`[SERVER] app listening on port ${PORT}`);
});
