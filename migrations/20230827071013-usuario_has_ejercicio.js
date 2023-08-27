'use strict';
/* IMPORTE El ARCHIVO CON EL MODELO */
const usuario_has_ejercico = require('../models').usuario_has_ejercico;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /* CREACIÓN DE LA TABLA A PARTIR DE LA CLASE */
    await usuario_has_ejercico.sync()
  },

  async down (queryInterface, Sequelize) {
    /* ELIMINACIÓN LA TABLA */
    await queryInterface.dropTable('usuario_has_ejercicio');
  }
};
