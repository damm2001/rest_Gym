const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuario_has_ejercicio', {
    usuario_idusuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    ejercicio_idejercicio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ejercicio',
        key: 'idejercicio'
      }
    }
  }, {
    sequelize,
    tableName: 'usuario_has_ejercicio',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "usuario_idusuario" },
          { name: "ejercicio_idejercicio" },
        ]
      },
      {
        name: "fk_usuario_has_ejercicio_ejercicio1_idx",
        using: "BTREE",
        fields: [
          { name: "ejercicio_idejercicio" },
        ]
      },
      {
        name: "fk_usuario_has_ejercicio_usuario1_idx",
        using: "BTREE",
        fields: [
          { name: "usuario_idusuario" },
        ]
      },
    ]
  });
};
