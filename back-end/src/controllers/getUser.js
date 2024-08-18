const getUserRouter = require("express").Router();
const path = require("path");

getUserRouter.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname, "../data/users.json"));
});

module.exports = getUserRouter;
