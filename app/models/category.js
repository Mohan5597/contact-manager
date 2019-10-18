const mongoose=require('mongoose')
const Schema=mongoose.Schema

const categorySchema=new Schema({
    // personal:{
    //     type:String
    // },
    // office:{
    //     type:String
    // },
    // other:{
    //     type:String
    // },
    type:{
        type:String,
        required:true
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
})
const Category=mongoose.model('Category',categorySchema)

module.exports=Category