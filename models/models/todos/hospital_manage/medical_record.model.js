import mongoose from "mongoose"

const medicalSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  diagnosedWith:{
    type:String,
    required:true
  },
  address:{
    type:String,
    required:true
  },
  age:{
    type:Number,
    required:true
  },
  bloodGroup:{
    type:String,
    required:true
  },
  gender:{
    type:String,
    enum:["M","F","O"]
  },
  admittedIn:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Hospital"
  }

},{timestamps:true})
export const medicalRecord=mongoose.model(
    'medicalRecord',medicalSchema
)