const mongoose = require('mongoose')
  const { Schema } = mongoose;

  const postMessage = new Schema({
   title:String,
   message:String,
   creator:String,
   tags:[String],
   selectedFile:String,
   likeCount:{
       type:Number,
       default:0
   },
   cretedAt:{
       type:Date,
       default:new Date()
   }
    
  });

  const PostMessage = mongoose.model('PostMessage', postMessage);
  module.exports =PostMessage
