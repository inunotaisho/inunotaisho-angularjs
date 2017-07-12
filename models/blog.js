'use strict'

module.exports = (sequelize, DataTypes) =>{
    const Blog = sequelize.define('Blog', {
        preview: {
            type: DataTypes.STRING
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
    }, {
        tableName: 'blogs'
    });
    return Blog;
}