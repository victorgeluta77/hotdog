const express = require('express');
const path = require('path');
const router = express.Router();
const readMongo = require('../models/readMongo');
const createMongo = require('../models/createMongo');

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"../index.html"));
})
// read element from database
router.get('/readhotdog', (req,res)=>readMongo.dani(req,res));


router.get('/createhotdog',(req,res)=>{
    res.sendFile(path.join(__dirname,"../public/pages/createhotdog.html"));
})
// create elment to database
router.post('/createhotdog',(req,res)=>createMongo(req,res));



router.post('/',(req,res)=>readMongo.delUp(req,res));


module.exports = router;