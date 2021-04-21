const qns=require('../model/questionsSchema');
//get db connection
const db=require('../services/db');

//find qns by course
let findOne=async(course)=>{
    console.log("inside qns crud "+course)
    try{
        return await qns.find({courseName:course});
    }
    catch(error){
        console.log(error);
    }
}
// //find qns by course for check
// let findOneCheck=async(course)=>{
//     console.log("inside qns crud check "+course)
    
//         var ite= qns.find({courseName:course});
//         (await ite).forEach(fun)
    
// }
//find persons
let findAll=async(email,pass)=>{
    console.log("inside find all")
    try{
        return await qns.find({});
    }
    catch(error){
        console.log(error);
    }
}
module.exports={findOne,findAll}