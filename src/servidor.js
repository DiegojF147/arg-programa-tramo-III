require("dotenv").config();

const express = require("express");
const usuarioRouter = require("./routes/usuarioRoutes.js");

const app = express();

const port = 3000;

app.use(usuarioRouter);

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
