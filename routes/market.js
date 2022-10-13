var express = require('express');
var router = express.Router();
var services = require('../services/market_services')
var daos =  require('../daos/market_api')
/* GET users listing. */
router.get('/', function(req, res, next) {
  daos.gettingDailyLivemarket('AAPL').then((resp)=>{
    res.send(resp.data)
  })
})

router.get('/monthly', function(req, res, next) {
    daos.gettingMonthlyLivemarket('TSLA').then((resp)=>{
      res.send(resp.data)
    })
  })




module.exports = router;
