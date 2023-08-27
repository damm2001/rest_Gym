'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /* INSERTAR UNA LISTA DE OBJETOS (REGISTROS) EN LA TABLA */
    await queryInterface.bulkInsert('usuario', [
	     
      /* LA ESTRUCTURA DE LOS OBJETOS JSON (CLAVE-VALOR), DE ACUERDO CON EL MODELO RELACIONADO */
      {
        nombre_usuario: 'Diego Martínez',
        correo_usuario: 'dianmart@espol.edu.ec'
        
      },
      {
        nombre_usuario: ' Meiyin Chang',
        correo_usuario: 'mmchang@espol.edu.ec'
      }
      
      ], {});
  },

  async down (queryInterface, Sequelize) {
    
    /* ELIMINAR TODOS LOS REGISTROS DE LA TABLA */
    await queryInterface.bulkDelete('usuario', null, {});

  }
};
