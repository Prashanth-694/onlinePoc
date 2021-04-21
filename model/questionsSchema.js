const mongoose=require('mongoose');
let questionsSchema=mongoose.Schema({
    qnsId:{type:Number,require:true,unique:true},
    courseName:{type:String},
    qns:{type:String},
    opt1:{type:String},
    opt2:{type:String},
    opt3:{type:String},
    opt4:{type:String},
    correctAns:{type:String}
})
module.exports=mongoose.model('questions',questionsSchema);