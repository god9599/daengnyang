const express = require('express');
const router = express.Router();
const request = require("request");

router.get('/', function (req, res) {
    res.render('qrcode');
});


router.post('/', function(req, res){ 
    var accesstoken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiIxMTAwNzU5ODc0Iiwic2NvcGUiOlsiaW5xdWlyeSIsImxvZ2luIiwidHJhbnNmZXIiXSwiaXNzIjoiaHR0cHM6Ly93d3cub3BlbmJhbmtpbmcub3Iua3IiLCJleHAiOjE2MDI0ODIxOTEsImp0aSI6Ijk5MzEzOGFiLWUwMjEtNDg5Mi1hM2RiLTMxNzk1NTBkNjI2ZSJ9.ua1BLvjPklMDfCzsHehqFdznUtGVppo63TkR1pJPYAw";
    var user_seq_no = "1100759874"
                            //사용자정보조회 API
    var option = {          //qrcode생성에 이용할 핀테크이용번호 받아옴 
      method: "GET",
      url : "https://testapi.openbanking.or.kr/v2.0/user/me",
      headers: {
        Authorization : "Bearer " + accesstoken,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      //form 형태는 form / 쿼리스트링 형태는 qs / json형태는 json        
      qs: {
        user_seq_no : user_seq_no,
      },
    };
  
    request(option, function (error, response, body) {
      var listResult = JSON.parse(body);
      console.log(listResult.res_list[0]);
      res.json(listResult);      
    });    
});


module.exports=router;