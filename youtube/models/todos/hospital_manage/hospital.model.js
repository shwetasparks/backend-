import mongoose from "mongoose"

const hospitalSchema=new mongoose.Schema({
    
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true,
    },
    addressLine1:{
        type:String,
        required:true
    },
    addressLine2:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true

    },
    pincode:{
        type:String,
        required:true
    },
    specialisedIn:[
        {
            type:String,
        }
    ]

},{timestamps:true})
 

export const hospitalRecord=mongoose.model('hospitalRecord',hospitalSchema)