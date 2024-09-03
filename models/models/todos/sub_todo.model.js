import mongoose from "mongoose";
const subTodoSchema=new mongoose.Schema({
  description:{
    type:String,
  }

},{timeStamps:true})

export const Subtodo=mongoose.model("subtodo",subTodoSchema)
