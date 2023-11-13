require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const { database } = require("./config/SequelizeConfig.js");
const usuarioRouter = require("./routes/usuarioRoutes.js");
const autenticacionRouter = require("./routes/autenticacionRoutes.js");
const archivoRouter = require("./routes/archivorouter.js");
const georefRouter = require("./routes/georefRouter.js");
const emailRouter = require("./routes/emailRouter.js");
const { Sequelize } = require("sequelize");

const app = express();

const port = 3000;
// Middleware
app.use(bodyParser.json());
app.use(fileUpload());

// Rutas
app.use(usuarioRouter);
app.use(autenticacionRouter);
app.use(archivoRouter);
app.use(georefRouter);
app.use(emailRouter);

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
  database();
});
