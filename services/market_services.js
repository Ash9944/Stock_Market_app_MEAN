const api =  require('../daos/market_api')
const axios =  require('axios')
async function identifying_symbol(){
await axios.get('https://pkgstore.datahub.io/core/nasdaq-listings/nasdaq-listed-symbols_csv/data/595a1f263719c09a8a0b4a64f17112c6/nasdaq-listed-symbols_csv.csv')
}

module.exports.identifying_symbol = identifying_symbol