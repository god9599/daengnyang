const express = require('express');
const router = express.Router();


var stores = [];

stores.push({
  id: "0",
  name: "방가댕댕",
  location: "서울특별시 송파구 중대로 135",
  cost_list: {
    "cost_1": "30.0",
    "cost_2": "50.0",
    "cost_3": "60.0",
    "cost_4": "상담 후 결정",
  },
  src: "/images/store1.jpg"
})

stores.push({
  id: "1",
  name: "방가냥냥",
  location: "서울특별시 관악구 관악로 152",
  cost_list: {
    "cost_1": "25.0",
    "cost_2": "55.0",
    "cost_3": "70.0",
    "cost_4": "상담 후 결정",
  },
  src: "/images/store2.jpg"
})

stores.push({
  id: "2",
  name: "안녕멍멍",
  location: "서울특별시 송파구 올림픽로 240",
  cost_list: {
    "cost_1": "35.0",
    "cost_2": "45.0",
    "cost_3": "60.0",
    "cost_4": "상담 후 결정",
  },
  src: "/images/store3.jpg"
})

stores.push({
  id: "3",
  name: "안녕야옹",
  location: "서울특별시 용산구 서빙고로 137",
  cost_list: {
    "cost_1": "40.0",
    "cost_2": "50.0",
    "cost_3": "70.0",
    "cost_4": "상담 후 결정",
  },
  src: "/images/store4.jpg"
})

stores.push({
  id: "4",
  name: "멍멍야옹",
  location: "서울특별시 서초구 방배로42길 46",
  cost_list: {
    "cost_1": "28.0",
    "cost_2": "57.0",
    "cost_3": "66.0",
    "cost_4": "상담 후 결정",
  },
  src: "/images/store5.jpg"
})


//수정
router.get('/', function (req, res) {
  res.render('storeList');
});


router.post('/',function(req,res,next){
    res.json(stores);
});

module.exports=router;