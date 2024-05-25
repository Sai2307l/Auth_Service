const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const { PORT } = require("./config/serverConfig");

const ApiRoutes = require("./routes/index");

const prepareAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", ApiRoutes);

  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
  });
};

prepareAndStartServer();
