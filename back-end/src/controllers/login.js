const loginRouter = require("express").Router();
const fs = require("fs");
const path = require("path");

// Ruta para manejar el login
loginRouter.post("/", (req, res) => {
  const { email, password } = req.body;

  fs.readFile(
    path.join(__dirname, "../data/users.json"),
    "utf8",
    (err, data) => {
      if (err) {
        console.error("Error al leer el archivo JSON:", err);
        return res.status(500).json({ message: "Error interno del servidor" });
      }

      const users = JSON.parse(data);

      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        res.cookie("user_id", user.user_id, { httpOnly: true, secure: true });

        const { password, ...userWithoutPassword } = user;
        return res.status(200).json(userWithoutPassword);
      } else {
        return res.status(401).json({ message: "Credenciales inválidas" });
      }
    }
  );
});

module.exports = loginRouter;
