import express from "express";
import mongoose from "mongoose";

import config from "./config.js";
import routes from "./routes.js";
import setupSwagger from "./setupSwagger.js";

const app = express();

app.use(express.json());

routes(app);
setupSwagger(app);

function startExpress() {
  app.listen(config.port, () => {
    console.log("Server started on Port: " + config.port);
  });
}

mongoose
  .connect(config.mongoConnUri)
  .then(startExpress)
  .catch((e) => {
    console.error("Couldn't connect to MongoDB", e);
    process.exit(1);
  });