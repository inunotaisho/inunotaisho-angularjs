'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.createTable('blogs',

    {
      id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      preview:{
        type:Sequelize.STRING,
        unique:false
      },
      image:{
        type:Sequelize.STRING,
        unique:true
      },
      subject:{
        type:Sequelize.STRING,
        unique: false
      },
      post:{
        type:Sequelize.STRING,
        unique:false
      },
      createdAt: {
        allowNull: false,
        type:Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type:Sequelize.DATE
      }
    })
  },

  down: function (queryInterface, Sequelize) {

    return queryInterface.createTable('blogs')

  }
};