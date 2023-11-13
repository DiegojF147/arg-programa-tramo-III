const UsuarioModel = require("./../models/UsuarioModel.js");

const UsuariosController = {};

// Ver usuarios
UsuariosController.verUsuarios = async (req, res) => {
  try {
    const listaUsuarios = await UsuarioModel.findAll();
    return res.json(listaUsuarios);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ocurrio un error interno",
      error: error,
    });
  }
};
UsuariosController.js;
// Ver usuario
UsuariosController.verUsuario = async (req, res) => {
  const usuarioId = req.params.id;

  try {
    const usuario = await UsuarioModel.findByPk(usuarioId);

    if (!usuario) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }

    return res.json(usuario);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ocurrió un error interno al buscar el usuario",
      error: error,
    });
  }
};

// Crear usuario
UsuariosController.crearUsuario = async (req, res) => {
  try {
    const { nombres, apellidos } = req.body;

    const nuevoUsuario = await UsuarioModel.create({
      nombres,
      apellidos,
    });

    return res.status(201).json(nuevoUsuario);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ocurrió un error interno",
      error: error,
    });
  }
};

// Editar usuario
UsuariosController.editarUsuario = async (req, res) => {
  const usuarioId = req.params.id;

  try {
    const usuario = await UsuarioModel.findByPk(usuarioId);

    if (!usuario) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }

    await usuario.update(req.body);

    return res.json({ mensaje: "Usuario editado correctamente" });
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ocurrió un error interno al editar el usuario",
      error: error,
    });
  }
};

// Eliminar usuario
UsuariosController.eliminarUsuario = async (req, res) => {
  const usuarioId = req.params.id;

  try {
    const usuario = await UsuarioModel.findByPk(usuarioId);

    if (!usuario) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }

    await usuario.destroy();

    return res.json({ mensaje: "Usuario eliminado correctamente" });
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ocurrió un error interno al eliminar el usuario",
      error: error,
    });
  }
};

module.exports = UsuariosController;
