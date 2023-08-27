'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /* INSERTAR UNA LISTA DE OBJETOS (REGISTROS) EN LA TABLA */
    await queryInterface.bulkInsert('ejercicio', [
	     
      /* LA ESTRUCTURA DE LOS OBJETOS JSON (CLAVE-VALOR), DE ACUERDO CON EL MODELO RELACIONADO */
      {
        nombre_ejercicio: 'Press de banca',
        categoria: 'Tren Superior',
        descripcion: 'Mas efectivo para el pecho'
        
      },
      {
        nombre_ejercicio: 'Sentadilla',
        categoria: 'Tren Inferior',
        descripcion: 'Mas efectivo para cuadriceps'
      }
      
      ], {});
  },

  async down (queryInterface, Sequelize) {
    /* ELIMINAR TODOS LOS REGISTROS DE LA TABLA */
    await queryInterface.bulkDelete('ejercicio', null, {});
  }
};
