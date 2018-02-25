'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.createTable('Blog',

      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        preview: {
          type: Sequelize.STRING
        },
        subject: {
          type: Sequelize.STRING,
          unique: false
        },
        post: {
          type: Sequelize.STRING,
          unique: false
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      })
  },

  down: function (queryInterface, Sequelize) {

    return queryInterface.createTable('Blog')

  }
};