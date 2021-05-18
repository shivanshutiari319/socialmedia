const express = require('express')
const router= express.Router();
const {getpost,createpost} = require('../controllers/posts.js')
// const createpost = require('../controllers/posts.js')
const postmessge =require('../models/postMessage')
router.get('/',getpost);
// router.post('/',createpost);

module.exports = router;
