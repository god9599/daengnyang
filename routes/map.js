const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");
router.use(bodyParser.json());

router.get('/',function(req,res,next){
    res.render('map');
    
})

module.exports=router;