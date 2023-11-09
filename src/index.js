const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;
const setupAndStart = async () => {
  const app = express();
  app.listen(PORT, () => {
    console.log();
    console.log(`Server started at ${PORT}`);
  });
};

setupAndStart();
