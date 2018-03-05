'use strict'
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    author: String,
    preview: String,
    subject: String,
    post: String
});

const BlogModel = mongoose.model('Blog', BlogSchema);

module.exports = BlogModel;