const express = require('express');
const router = express.Router();
const request = require("request");


router.post("/", function (req, res) {
    //var userId = req.decoded.userId;
  var fin_use_num = req.body.fin_use_num;
  var amount = req.body.amount;
  var to_fin_use_num = req.body.to_fin_use_num;
  console.log("출금 핀테크번호, 입금할 핀테크번호, 출금금액", fin_use_num, to_fin_use_num, amount);

    var countnum = Math.floor(Math.random() * 1000000000);
    var transId = "T991641470U" + countnum; //이용기관번호 본인것 입력
      var option = {
          method: "POST",
          url: "https://testapi.openbanking.or.kr/v2.0/transfer/withdraw/fin_num",
          headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiIxMTAwNzYwNTU1Iiwic2NvcGUiOlsiaW5xdWlyeSIsImxvZ2luIiwidHJhbnNmZXIiXSwiaXNzIjoiaHR0cHM6Ly93d3cub3BlbmJhbmtpbmcub3Iua3IiLCJleHAiOjE2MDI0ODEzNDUsImp0aSI6IjUxMmUyZTY2LWRhMzAtNDMxNS05YTBmLTk3MGNlZGU4OTIyYSJ9.XsmDfTXaj4lNBa2124IQD09fnEnROvXeUhw-pm4JyXA",
          },
          //form 형태는 form / 쿼리스트링 형태는 qs / json 형태는 json ***
          json: {
              bank_tran_id: transId, 
              cntr_account_type: "N",
              cntr_account_num: "8518142015", 
              dps_print_content: "댕냥댕냥결제", 
              fintech_use_num: fin_use_num, 
              wd_print_content: "오픈뱅킹출금",
              tran_amt: "10000",
              tran_dtime: "20200721110000", 
              req_client_name: "홍길동", 
              req_client_fintech_use_num: fin_use_num,
              transfer_purpose: "ST",
              req_client_num: "HONGGILDONG1234",
              recv_client_name: "정혜빈",
              recv_client_bank_code: "097",
              recv_client_account_num: "8518142015"
          },
      };
      request(option, function (err, response, body) {
          console.log(body);
          res.json(body);
          });
      });

module.exports=router;