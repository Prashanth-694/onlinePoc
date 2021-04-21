const express = require('express');
var app=express();
var path=require('path');
var config=require('config');
var router=require('./routes/onlineExamRouter');
//telling to expressFm thatwe are dealing with view handler
app.set('view engine','ejs');  //for ejs view handler import statement is not required.
app.set('views',path.join(__dirname,'view')); 
app.use(express.static(path.join(__dirname,'./public')));
app.use('/',router);

//from config
app.listen(process.env.PORT || config.get('app.port'),()=>{  
    console.log('server started at '+config.get('app.port'));
});