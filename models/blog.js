'use strict'

module.exports = (sequelize, DataTypes) =>{
    const Blog = sequelize.define('Blog', {
        preview: {
            type: DataTypes.STRING
        },
        image: {
            type: DataTypes.STRING,
            unique:true
        },
        subject: {
            type: DataTypes.STRING,
            unique: false
        },
        post: {
            type: DataTypes.STRING,
            unique: false
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE
        }
    });
    return Blog;
}