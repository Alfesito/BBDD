'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable(
      'Scores',
      { id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          unique: true
        },
        wins: { 
          type: Sequelize.INTERGER,
          allowNull:false,
          validate : {min: 0}
        },
        userId: {
            type: Sequelize.INTEGER,
            references: {
                model: "Users",
                key: "id"
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false
        }
      },
      {
        sync: {force: true}
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Scores');
  }
};

