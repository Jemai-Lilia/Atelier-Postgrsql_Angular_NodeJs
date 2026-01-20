'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tasks', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      titre: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
      },
      etat: {
        type: Sequelize.ENUM('A_FAIRE', 'EN_COURS', 'DONE'),
        allowNull: false,
        defaultValue: 'A_FAIRE',
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tasks');
    await queryInterface.sequelize.query(
      'DROP TYPE IF EXISTS "enum_tasks_etat";'
    );
  },
};
