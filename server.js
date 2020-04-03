const express = require("express");
const bodyparser = require("body-parser");
const morgan = require("morgan");
const pages = require("./routes/pages");

/* constants */
const PORT = process.env.PORT || 3001;

const app = express();

/* set-up middlewares */
app.use(morgan("dev")); // logging
app.use(bodyparser.json()); // parsing json data in request body
app.use("/", pages);

/* run our app */
app.listen(PORT, () => {
  console.log(`[SERVER] app listening on port ${PORT}`);
});
