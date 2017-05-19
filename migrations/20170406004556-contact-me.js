'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('Contacts',
    {
     id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName:{
        type:Sequelize.STRING
      },
      lastName:{
        type:Sequelize.STRING
      },
      email:{
        type:Sequelize.STRING,
        unique: true
      },
      subject:{
          type:Sequelize.STRING
      },
      message:{
          type:Sequelize.STRING
        }
    })
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
