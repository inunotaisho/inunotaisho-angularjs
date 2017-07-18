'use strict';

var bcrypt = require('bcrypt');

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      set: function (val) {
        this.setDataValue('password', bcrypt.hashSync(val, 8));
      },
      validate: {
        notIn: [['password']],
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        notEmpty: true
      }
    },
    emailPassword: {
      type: DataTypes.STRING,
      set: function (val) {
        this.setDataValue('emailPassword', bcrypt.hashSync(val, 8))
      },
      validate: {
        notEmpty:true
      }
    },
    userImage:{
        type:DataTypes.STRING,
        unique:true
      },
      profileImage:{
        type:DataTypes.STRING,
        unique: true
      },
  }, {
      instanceMethods: {
        isValidPassword: function (password) {
          console.log(password, this.password);
          return bcrypt.compareSync(password, this.password);
        }
      },
      classMethods: {
        associate: function (models) {

        }
      },
      validate: {

      }
    });
  return User;
};