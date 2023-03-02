const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.get("/details",function(req,res){
  res.sendFile(__dirname + "/details.html")
});

app.get("/register",function(req,res){
  res.sendFile(__dirname + "/register.html");
});

app.post("/register",function(req,res){
  res.redirect("https://www.collexo.com/user/login/?dest=/pay-fee/srm-university-ap-andhra-pradesh-37692/");
});

app.listen(3000 || process.env.PORT,function(err){
  if(!err){
    console.log("Server Started");
  }
});
