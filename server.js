require("dotenv").config();
const express = require("express");
const router = require("./auth/auth-router");
const connectionDb = require("./utils/db");
const errorMiddleware = require("./middleware/error-middleware");
const app = express();

app.use(express.json());

app.use("/", router);

app.use(errorMiddleware);

const PORT = 8000;

connectionDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
  });
});
