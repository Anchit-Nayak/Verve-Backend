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
    image:{
        type: String,
        required: true
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