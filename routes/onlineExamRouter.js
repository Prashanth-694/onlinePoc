

const { info } = require('console');
var express = require('express');
const app=express();
var router = express.Router();
const path=require('path')
const examCrud=require('../controller/onlineExamCrud');
const qnsCrud=require('../controller/questionCrud');

//Home page route.
router.get('/', function (req, res) {
    console.log("inside home")  
    
});

//register
router.get('/register', function (req, res) {
 console.log("inside register up get")
 const addStatus=examCrud.addPerson(req.query.fName,req.query.lName,req.query.uName,req.query.email,req.query.password,req.query.contact,req.query.city,req.query.address)
 const getStatus=examCrud.findAll()
 getStatus.then(result=>{
    res.render('AfterAdminPanel' ,{admin:result})
 } ) .catch(error=> console.log(error))
})

//login 
router.get('/find',function(req,res)
{
    console.log("Inside login get "+req.query.email +" " +req.query.password)
          
            if(req.query.email=='admin@gmail.com' && req.query.password=='admin'){
                const getStatus=examCrud.findAll()
                getStatus.then(result=>{
                res.render('adminPanel' ,{admin:result})
                })
                .catch(error=> console.log(error))
            }
           else{
            const getStatus=examCrud.findOne(req.query.email,req.query.password)
            getStatus.then(result=>{
                res.render('profile' ,{student:result})
                })
                .catch(error=> console.log(error)) 
           }    
})

//update
router.get('/update',function(req,res)
{
    console.log("Inside update get "+req.query.uName,req.query.email,req.query.city,req.query.address,req.query.contact)
    const updateStatus=examCrud.updatePerson(req.query.uName,req.query.email,req.query.city,req.query.address,req.query.contact)
    const getStatus=examCrud.findOneEmail(req.query.email)   
    getStatus.then(result=>{  res.render('AfterUpdate' ,{student:result})})
  .catch(error=> console.log(error))

})

//Delete
router.get('/delete',function(req,res)
{   console.log("Inside Delete  "+req.query.email)
  const deleteStatus=examCrud.deletePerson(req.query.email);
  console.log("wait olle")
  const getStatus=examCrud.findAll()
  getStatus.then(result=>{
     res.render('adminPanel' ,{admin:result})
  } ) .catch(error=> console.log(error))
})


router.get('/qnsList',function(req,res)
{
    console.log("inside qns Listsss "+req.query.course);
    const qnsStatus=qnsCrud.findOne(req.query.course)
    qnsStatus.then(result=>{
        res.render('qnsList',{qns1:result,course:req.query.course})
    })
    .catch(error=> console.log(error))

})

router.get('/validation',function(req,res)
{      console.log(req.query);
    console.log(req.query.course);
    let userAns=new Map();
    let q1="j";
    let a1="jk";
    let q2="jl";
    let a2="jm";
    let h="req.query.q1";
    userAns.set(q1,req.query.q1)
    userAns.set(a1,req.query.qAns1)
    userAns.set(q2,req.query.q2)
    userAns.set(a2,req.query.qAns2)
    console.log(userAns.get(q1))
    console.log(userAns.get(a1))
    console.log(userAns.get(q2))
    console.log(userAns.get(a2))
    let re=0;
const gs=qnsCrud.findOne(req.query.course)
 gs.then(result=>{
    result.forEach(function( info,index)
   {      
     
    if(index==0)
    {
        if(userAns.get(a1)==info.correctAns)
        {
           re++;
        }
    }
    else{
        if(userAns.get(a2)==info.correctAns)
        {
           re++;
        }
    }
  
     })
    res.end(`${re}  done`);

 })
 .catch(error=> console.log(error))




    
    
    
    
})

module.exports=router;