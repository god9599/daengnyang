const express = require('express');
const router = express.Router();

router.get('/',function(req,res,next){
    res.render('reserve');
})

module.exports=router;