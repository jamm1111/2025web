var express = require("express");
var server = express();
var bodyParser = require("body-parser");

app.use(express.static("public"));

server.set("view engine", 'ejs');
server.set("views", __dirname+"/view")

var fileUpload = require("express-fileupload");

server.use(express.static(__dirname + "/Public"));
server.use(bodyParser.urlencoded());
server.use(bodyParser.json());
server.use(fileUpload({limits:{fileSize:2*1024*1024}}))

var DB=require("nedb-promises");
var ContactDB = DB.create(__dirname+"/Contact.db");
var TwoDDB = DB.create(__dirname+"/TwoD.db");
var ThreeDDB = DB.create(__dirname+"/ThreeD.db");



server.get("/", (req, res) => {
    res.send("Hello world!");
})







server.get("/TwoD", (req, res) => {

    TwoDDB.find({}).then(results=>{
        res.send(results);
    })
    
})



server.get("/ThreeD", (req, res) => {
    
  ThreeDDB.find({}).then(results=>{
        res.send(results);
   })
    
})



server.post("/contact", (req, res) =>{
    ContactDB.insert(req.body);
    //move to public/upload

    var upFile=req.files.myFile1;
    
    upFile.mv(__dirname+"/public/upload/"+upFile.name, function(err){
        if(err==null){
            res.render("msg",{message:"I got a file: "+upFile.name})
            
        }else{
            res.render("msg",{message:err});
        }
    });


})





server.listen(80)