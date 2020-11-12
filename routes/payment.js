const express = require('express');
const router = express.Router();

router.get('/',function(req,res,next){
    res.render('payment');
})


router.post("/", function (req, res) {

    console.log(req.body);
    var name = req.body.name;
    var email = req.body.email;
    var pet =  req.body.Pet;
    var Date = req.body.Date;
    var Time = req.body.Time;
    var Style = req.body.Style;
    var Total = req.body.Total;

});


module.exports=router;