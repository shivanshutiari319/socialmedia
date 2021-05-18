const express = require('express');
const bodyParser = require("body-parser");
const mongoose= require('mongoose');
const cors =require ('cors')
const app= express();
const Posts = require('./routes/posts.js')
app.use(bodyParser.json({limit:"30mb" , extended:true}));

app.use(bodyParser.urlencoded({limit:"30mb" , extended:true}));
app.use(cors());
app.use('/posts',Posts);
app.get('/',(req,res)=>{

    res.send("home page");

});

const PORT=process.env.PORT||5000;
  mongoose.connect(PORT,{useNewUrlParser: true,useUnifiedTopology: true})
  .then(()=>{
      app.listen(PORT,(req,res)=>{
      console.log("hello shiva");
      })
  
  })
  .catch((err)=>{
    //   console.log("err")
  
  });


app.listen(5000,(res,req)=>{
    console.log("sever is running");
});