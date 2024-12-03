const express = require("express");
const app = express();

const dotenv = require("dotenv");
bodyParser = require("body-parser");
dotenv.config();

const Port = process.env.PORT || 4000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const Connect = require("./config/index");
const router = require("./route/index");
app.use("/api/v1", router);
app.listen(Port, async () => {
  Connect();
  console.log(`Server Start at localhost:${Port}`);
});
