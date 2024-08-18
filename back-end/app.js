require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

const cors = require("cors");

const getProductsRouter = require("./src/controllers/getProducts");
const loginRouter = require("./src/controllers/login");
const getUserRouter = require("./src/controllers/getUser");

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/products", getProductsRouter);
app.use("/api/login", loginRouter);
app.use("/api/user", getUserRouter);

module.exports = app;
