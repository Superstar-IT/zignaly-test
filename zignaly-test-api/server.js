const express = require("express");
const cors = require("cors");
const phoneRoutes = require('./app/routes/phone.routes');

const app = express();

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Zignaly Test application." });
});
//phone route
app.use("/api/phones", phoneRoutes);

module.exports = app;