const mongoose = require('mongoose')


const Schema=mongoose.Schema

const contactSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    website:{
        type:String,
        required:true
    },
    category:{
        type:Schema.Types.ObjectId,
        ref:'Category'
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }


})

const Contact=mongoose.model('Contact',contactSchema)
module.exports = Contact