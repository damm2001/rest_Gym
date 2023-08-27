'use strict';
/* IMPORTE El ARCHIVO CON EL MODELO */
const usuario = require('../models').usuario;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /* CREACIÓN DE LA TABLA A PARTIR DE LA CLASE */
    await usuario.sync()
  },

  async down (queryInterface, Sequelize) {
    /* ELIMINACIÓN LA TABLA */
    await queryInterface.dropTable('usuario');
  }
};
