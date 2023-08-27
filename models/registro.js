const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('registro', {
    idregistro: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fecha_hora: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    repeticiones: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    peso: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    comentario: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    usuario_idusuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    ejercicio_idejercicio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ejercicio',
        key: 'idejercicio'
      }
    }
  }, {
    sequelize,
    tableName: 'registro',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idregistro" },
        ]
      },
      {
        name: "fk_registro_usuario_idx",
        using: "BTREE",
        fields: [
          { name: "usuario_idusuario" },
        ]
      },
      {
        name: "fk_registro_ejercicio1_idx",
        using: "BTREE",
        fields: [
          { name: "ejercicio_idejercicio" },
        ]
      },
    ]
  });
};
