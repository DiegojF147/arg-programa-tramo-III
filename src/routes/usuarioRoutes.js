const usuarioRouter = require("express").Router();
const {
  verUsuarios,
  verUsuario,
  crearUsuario,
  editarUsuario,
  eliminarUsuario,
} = require("./../controllers/UsuariosController.js");
const {
  verUsuarios: verUsuariosMongoose,
  verUsuario: verUsuarioMongoose,
  crearUsuario: crearUsuarioMongoose,
  editarUsuario: editarUsuarioMongoose,
  eliminarUsuario: eliminarUsuarioMongoose,
} = require("./../controllers/mongoose/UsuariosController.js");

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

/* ################################################### */

// Ver usuarios (Mongoose)
usuarioRouter.get("/m/usuarios", verUsuariosMongoose);

// Ver usuario (Mongoose)
usuarioRouter.get("/m/usuario/:id", verUsuarioMongoose);

// Crear usuario (Mongoose)
usuarioRouter.post("/m/usuario", crearUsuarioMongoose);

// Editar usuario (Mongoose)
usuarioRouter.put("/m/usuario", editarUsuarioMongoose);

// Eliminar usuario (Mongoose)
usuarioRouter.delete("/m/usuario", eliminarUsuarioMongoose);

module.exports = usuarioRouter;
