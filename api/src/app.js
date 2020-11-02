const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const routes = require("./routes/index.js");
const cors = require("cors");


const server = express();

server.name = "API";

server.use(morgan("dev"));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(cookieParser());
server.use(
  cors({
    origin: "http://localhost:3000", // allow to server to accept request from different origin
    credentials: true, // allow session cookie from browser to pass through
  })
);

server.use("/", routes);

// Error catching endware.
server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;