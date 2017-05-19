'use strict';
module.exports = function(sequelize, DataTypes) {
  var Contact = sequelize.define('Contact', {

        firstName:{
            type:DataTypes.STRING,
        },
        lastName:{
            type:DataTypes.STRING,
        },
        email:{
            type:DataTypes.STRING,
            unique: true
        },
        subject:{
            type:DataTypes.STRING
        },
        message:{
            type:DataTypes.STRING
        }
    })
  return Contact;
};