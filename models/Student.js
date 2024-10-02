import mongoose from 'mongoose';

// defining the schema
const BreakfastSchema = new mongoose.Schema({
   breakfastname : {type:String , required:true , trim : true},
   calorie : {type:mongoose.Decimal128 , required:true , min:10 , max : 10000},
   date : {type : Date , default : {type : Date.now()}}
})

// model  || creation of schema

const BreakfastModel =  mongoose.model('breakfast',BreakfastSchema);

export default BreakfastModel;