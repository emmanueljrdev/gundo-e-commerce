const getUserRouter = require("express").Router();
const fs = require("fs");
const path = require("path");

getUserRouter.get("/", (req, res) => {
  const userId = req.cookies.user_id;

  if (!userId) {
    return res.status(401).json({ message: "No estás autenticado" });
  }

  fs.readFile(
    path.join(__dirname, "../data/users.json"),
    "utf8",
    (err, data) => {
      if (err) {
        console.error("Error al leer el archivo JSON:", err);
        return res.status(500).json({ message: "Error interno del servidor" });
      }

      const users = JSON.parse(data);

      const user = users.find((user) => user.user_id === userId);

      if (user) {
        const { password, ...userWithoutPassword } = user;
        return res.status(200).json(userWithoutPassword);
      } else {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }
    }
  );
});

module.exports = getUserRouter;
