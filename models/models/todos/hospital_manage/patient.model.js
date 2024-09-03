import mongoose from "mongoose"

const patientSchema=new mongoose.Schema({

},{timestamps:true})

export const patientRecord=mongoose.model(
    'patientRecord',patientSchema
)