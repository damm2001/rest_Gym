'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('registro', [
	     
      /* LA ESTRUCTURA DE LOS OBJETOS JSON (CLAVE-VALOR), DE ACUERDO CON EL MODELO RELACIONADO */
      {
        fecha_hora: 'MARTES-12:00',
        repeticiones: 10,
        peso: 20,
        comentario: 'No comment',
        usuario_idusuario: 1,
        ejercicio_idejercicio: 1
      },
      {
        fecha_hora: 'LUNES-14:00',
        repeticiones: 8,
        peso: 40,
        comentario: 'No comment',
        usuario_idusuario: 2,
        ejercicio_idejercicio: 2
      }
      
      ], {});
  },

  async down (queryInterface, Sequelize) {
    /* ELIMINAR TODOS LOS REGISTROS DE LA TABLA */
    await queryInterface.bulkDelete('registro', null, {});
  }
};
