const PostMessage = require('../models/postMessage')

const getpost = async (req,res)=>{

    try { 
        const message= await PostMessage.find();
        res.status(200).json(message);
    } catch (error) {
        res.status(404).json({message:error.message});  
        
    }
} 

const createpost = async (req,res)=>{ 
    const post=req.body;
    try {
      const newpost= await post.save();
        res.send(201).json(newpost);
         
    } catch (error) {
        res.send(409).json({message:error.message});
    }
}

module.exports ={getpost,createpost};



