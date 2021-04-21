const mongoose=require('mongoose');
const onlineExamModel =mongoose.Schema({
firstName:{type:String},
lastName:{type:String},
userName:{type:String},
email:{type:String,require:true,unique:true},
password:{type:String},
contact:{type:Number},
city:{type:String},
address:{type:String}

})
module.exports=mongoose.model('UserDetails',onlineExamModel);