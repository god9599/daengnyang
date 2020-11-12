const express = require('express');
const router = express.Router();


//결제팀 modal
router.get('/',function(req,res,next){
    res.render('modal');
})

module.exports=router;