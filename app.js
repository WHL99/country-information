require("dotenv").config();

require("./db");

const express = require("express");

const app = express();

require("./config")(app);

const checkedListRoutes = require("./routes/index.routes");
app.use("/api/checked-list", checkedListRoutes);

require("./error-handling")(app);

module.exports = app;
