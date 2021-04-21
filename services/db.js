//load modules
const mongoose=require('mongoose');
const config=require('config');
//get config
var host=config.get('db.host');
var port=config.get('db.port');
var db=config.get('db.name');
//setup db connection
//mongoose.connect(`mongodb://${host}:${port}/${db}`);
mongoose.connect("mongodb+srv://prashanth123:prashanth123@cluster0.kkcwp.mongodb.net/OnlineExam?retryWrites=true&w=majority")
//get connection object 
const conn=mongoose.connection;
//open db connection
conn.on('open',()=>{  
    console.log('DB connected...');
});