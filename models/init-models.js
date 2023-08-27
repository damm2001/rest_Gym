var DataTypes = require("sequelize").DataTypes;
var _ejercicio = require("./ejercicio");
var _registro = require("./registro");
var _usuario = require("./usuario");
var _usuario_has_ejercicio = require("./usuario_has_ejercicio");

function initModels(sequelize) {
  var ejercicio = _ejercicio(sequelize, DataTypes);
  var registro = _registro(sequelize, DataTypes);
  var usuario = _usuario(sequelize, DataTypes);
  var usuario_has_ejercicio = _usuario_has_ejercicio(sequelize, DataTypes);

  ejercicio.belongsToMany(usuario, { as: 'usuario_idusuario_usuarios', through: usuario_has_ejercicio, foreignKey: "ejercicio_idejercicio", otherKey: "usuario_idusuario" });
  usuario.belongsToMany(ejercicio, { as: 'ejercicio_idejercicio_ejercicios', through: usuario_has_ejercicio, foreignKey: "usuario_idusuario", otherKey: "ejercicio_idejercicio" });
  registro.belongsTo(ejercicio, { as: "ejercicio_idejercicio_ejercicio", foreignKey: "ejercicio_idejercicio"});
  ejercicio.hasMany(registro, { as: "registros", foreignKey: "ejercicio_idejercicio"});
  usuario_has_ejercicio.belongsTo(ejercicio, { as: "ejercicio_idejercicio_ejercicio", foreignKey: "ejercicio_idejercicio"});
  ejercicio.hasMany(usuario_has_ejercicio, { as: "usuario_has_ejercicios", foreignKey: "ejercicio_idejercicio"});
  registro.belongsTo(usuario, { as: "usuario_idusuario_usuario", foreignKey: "usuario_idusuario"});
  usuario.hasMany(registro, { as: "registros", foreignKey: "usuario_idusuario"});
  usuario_has_ejercicio.belongsTo(usuario, { as: "usuario_idusuario_usuario", foreignKey: "usuario_idusuario"});
  usuario.hasMany(usuario_has_ejercicio, { as: "usuario_has_ejercicios", foreignKey: "usuario_idusuario"});

  return {
    ejercicio,
    registro,
    usuario,
    usuario_has_ejercicio,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
