var express = require("express");
var cors = require("cors");
var mongoClient = require("mongodb").MongoClient;
var connectionString = "mongodb://127.0.0.1:27017";
var app = express();
app.get("/getusers",(req, res)=>{
    mongoClient.connect(connectionString, (err, clientObj) =>{
       if(!err){
        var database = clientObj.db("reactdb");
         database.collection("tblusers").find({}).toArray((err, documents)=>{
         if(!err){
        res.send(documents);
        }
      })
     } 
    })
})
app.listen(4000);
console.log("server Started : http://127.0.0.1:4000");