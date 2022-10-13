const axios = require('axios')


async function gettingDailyLivemarket(symbol){
    const axios = require("axios");

    const options = {
        method: 'GET',
        url: 'https://alpha-vantage.p.rapidapi.com/query',
        params: {
          function: 'TIME_SERIES_DAILY_ADJUSTED',
          symbol: 'AAPL',
          outputsize: 'compact',
          datatype: 'json'
        },
        headers: {
          'X-RapidAPI-Key': 'b617894805msh12a119402c40ec7p157487jsnf4ab4a73281b',
          'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
        }
      };
 var data = await axios.request(options)
 return data
}


async function gettingMonthlyLivemarket(symbol){
    const axios = require("axios");

    const options = {
        method: 'GET',
        url: 'https://alpha-vantage.p.rapidapi.com/query',
        params: {symbol: symbol.toString(), function: 'TIME_SERIES_MONTHLY_ADJUSTED', datatype: 'json'},
        headers: {
          'X-RapidAPI-Key': 'b617894805msh12a119402c40ec7p157487jsnf4ab4a73281b',
          'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
        }
      };
 var data = await axios.request(options)
 return data
}



module.exports.gettingDailyLivemarket = gettingDailyLivemarket
module.exports.gettingMonthlyLivemarket = gettingMonthlyLivemarket
