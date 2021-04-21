const person=require('../model/onlineExamSchema');
var mailer=require('../services/mailer');
//get db connection
const db=require('../services/db');

//add employee
let addPerson=async(fName,lName,uName,email,password,contact,city,address)=>{
    try{
        console.log(fName,lName,uName,email,password,contact,city,address);
    let add= await new person({firstName:fName,lastName:lName,userName:uName,email:email,password:password,contact:contact,city:city,address:address}).save();
   mailer.sendMailer(uName,email,password)
    return "Added Succesfull."
}
    catch(error){
        console.log('ERROR OCCURED :'+error);
    }
}

//find person by email and Password
let findOne=async(email,password)=>{
    try{ console.log("inside find one")
        return await person.find({email:email,password:password});
    }
    catch(error){
        console.log(error);
    }
}
//find person by email
let findOneEmail=async(email)=>{
    try{ console.log("inside find one")
        return await person.find({email:email});
    }
    catch(error){
        console.log(error);
    }
}
//find persons
let findAll=async(email,pass)=>{
    console.log("inside find all")
    try{
        return await person.find({});
    }
    catch(error){
        console.log(error);
    }
}


//update Persin Details by Email
let updatePerson=async(userName1,email1,city1,address1,contact1)=>{
    console.log(userName1,email1,city1,address1,contact1)
    try{
        let update= await person.updateOne({email:email1},{userName:userName1,email:email1,city:city1,address:address1,contact:contact1});
        return "updated succesfully."
    }
    catch(error){
        console.log(error);
    }
}
//Delete person by email
let deletePerson=async(email)=>{
    try{
        return await person.deleteOne({email:email});
    }
    catch(error){
        console.log(error);
    }
}


//export methods
module.exports={addPerson,findOne,findAll,findOneEmail,updatePerson,deletePerson}