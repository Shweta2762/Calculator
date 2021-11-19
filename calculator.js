//jshint esversion:6

const express=require("express");
const bodyParser=require("body-parser");

const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    //res.send("<h2>Hello World</h2><p>from calculator</p>");
    res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
    
    //console.log(req.body);
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    var result=num1+num2;
    //var ree=document.getElementById("result");
    //ree.innerHTML(result);
    
    //res.send("Thanks for posting");
    res.send("The result of calculation is "+result);
});

app.listen(3000,function(){
    console.log("Server started at port 3000. Open your browser and type localhost:3000");
});