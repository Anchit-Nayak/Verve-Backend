const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    media: {
        filename: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
        type: {
          type: String, // "image" or "gif"
          required: true,
        },
    },
    cover: {
        filename: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
        type: {
          type: String, // "image" or "gif"
          required: true,
        },
    },
    username:{
        type: String,
        required: true,
        unique: true
    },
    userId:{
        type: String,
        required: true,
        unique: true
    },
    categories:{
        type: Array,
    }
}, {timestamps:true})

module.exports=mongoose.model("Post", PostSchema)