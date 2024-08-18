const app = require("./app");

const http = require("http");
const server = http.createServer(app);

server.listen(3001, () => {
  console.log("El servidor está corriendo en el puerto 3001");
});
