const mongoose = require("mongoose");

const PostsModel = mongoose.model(
    "node-api-wassim" , 
    {
        author:{
            type: String,
            required: true
        },
        message: {
            type: String,
            required:true
        },
        date: {
            type:Date,
            default:Date.now
        },
        age: {
            type: String,
            required:true
        }
    },
    "posts"
);

module.exports = {PostsModel };