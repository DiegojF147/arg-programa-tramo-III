const usuarioRouter = require("express").Router();
const {
  verUsuarios,
  verUsuario,
  crearUsuario,
  editarUsuario,
  eliminarUsuario,
} = require("./../controllers/UsuariosController.js");

// Ver usuarios
usuarioRouter.get("/usuarios", verUsuarios);

// Ver usuario
usuarioRouter.get("/usuario/:id", verUsuario);

// Crear usuario
usuarioRouter.post("/usuario", crearUsuario);

// Editar usuario
usuarioRouter.put("/usuario/:id", editarUsuario);

// Eliminar usuario
usuarioRouter.delete("/usuario/:id", eliminarUsuario);

module.exports = usuarioRouter;
