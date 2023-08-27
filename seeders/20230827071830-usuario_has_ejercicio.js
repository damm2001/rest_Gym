'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuario_has_ejercicio', [
	     
      /* LA ESTRUCTURA DE LOS OBJETOS JSON (CLAVE-VALOR), DE ACUERDO CON EL MODELO RELACIONADO */
      {
        usuario_idusuario: 1,
        ejercicio_idejercicio: 1
        
      },
      
      ], {});
  },

  async down (queryInterface, Sequelize) {
    /* ELIMINAR TODOS LOS REGISTROS DE LA TABLA */
    await queryInterface.bulkDelete('usuario_has_ejercicio', null, {});
  }
};
