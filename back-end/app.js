require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

const cors = require("cors");

const getProductsRouter = require("./src/controllers/getProducts");
const loginRouter = require("./src/controllers/login");

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/products", getProductsRouter);
app.use("/api/login", loginRouter);

module.exports = app;
