const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan")
const rateLimit = require("express-rate-limit")
const routes = require("./routes");

const app = express();


const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Too many accounts created from this IP, please try again after a minute"
});

//API SECURITY
app.use(morgan("tiny")) //just for logs
app.use(helmet());
app.use(cors());
app.use(limiter)
app.use(express.json());

app.use(routes);

module.exports = app;
