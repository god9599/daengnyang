const express = require('express');
const router = express.Router();
const request = require("request");

router.get('/',function(req,res,next){
    res.render('mymodal');
})


router.post("/login", function (req, res) {  //http request의 객체를 데이터를 body에 담아 전달함
    console.log("사용자 입력정보 :", req.body);
    var userEmail = req.body.userEmail;
    var userPassword = req.body.userPassword;
    var tokenKey = "fintech";
    var userId = 1;
    jwt.sign(
        {
        userId: userId,
        userEmail: userEmail,
        },
    tokenKey,
        {
        expiresIn: "10d",
        issuer: "fintech.admin",
        subject: "user.login.info",
        },
    function (err, token) {
        console.log("로그인 성공", token);
        res.json(token);
    });
    });


module.exports=router;