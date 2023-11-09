const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
dotenv.config();
const PORT = process.env.PORT;
const setupAndStart = async () => {
  const app = express();
  app.use(bodyParser);
  app.use(bodyParser.urlencoded({ extended: true }));
  app.listen(PORT, () => {
    console.log();
    console.log(`Server started at ${PORT}`);
  });
};

setupAndStart();
