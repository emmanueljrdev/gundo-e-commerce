const getProductsRouter = require("express").Router();
const path = require("path");

getProductsRouter.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname, "../data/products.json"));
});

module.exports = getProductsRouter;
