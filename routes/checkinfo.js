const express = require('express');
const router = express.Router();
const database = require( './data');

router.get('/',function(req,res,next){
    res.render('checkinfo', database[0]);
})

router.post('/',async function(req,res,next){
    
    let user_name = req.body.user_name; 
    let pet_name = req.body.pet_name;
    let kind = req.body.kind;
    let age = req.body.age;
    let gender = req.body.gender;
    let neutralization = req.body.Neutralization;
    let enrollment = req.body.Enrollment;
    
    console.log("데이터 넣기 전: ",database)

    await database.push({
        email : "test@test.com",
        user_name,
        pet_name,
        kind,
        age,
        gender,
        neutralization,
        enrollment
    })

    console.log("데이터 넣은 후: ",database)
   
    res.render('checkinfo',database[0])
})  

module.exports=router;