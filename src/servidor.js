require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const usuarioRouter = require("./routes/usuarioRoutes.js");
const autenticacionRouter = require("./routes/autenticacionRoutes.js");

const app = express();

const port = 3000;

app.use(bodyParser.json());

app.use(usuarioRouter);
app.use(autenticacionRouter);

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
