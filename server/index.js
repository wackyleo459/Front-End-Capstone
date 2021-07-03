const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const router = require("./router.js");

const PORT = process.env.PORT || 3000;
const host = "0.0.0.0";
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/", router);
app.use(express.static(path.join(__dirname, "../client/dist")));

app.listen(PORT, host, () => {
  console.log(`Connected to port ${PORT} on heroku`);
});
