require("dotenv").config();

console.log("Web 39 rulez big time");

const express = require("express");

const server = express();

console.log(process.env.NODE_ENV);

// on Heroku, an env variable is called "NODE_ENV" -> "production"
if (process.env.NODE_ENV === "development") {
  const cors = require("cors");
  server.use(express.json());
}
