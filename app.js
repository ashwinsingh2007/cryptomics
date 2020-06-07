const express = require('express')
const crypto_api = require("./lib/crypto_api");
const keyManager = require("./lib/KeyManager");
const app = express()
const port = 3000

app.get('/', async (req, res) => {
    const key_manager = new keyManager();
    const key = key_manager.getKey();
    const api = new crypto_api(key);
    
    const priceOutputData = await api.getPriceDataInJson('BTC,ETH,XRP,USDT,BCH,BSV,LTC,EOS,BNB,XTZ', 'USD'); 
    console.log('priceOutputData', priceOutputData)
    res.json({result: JSON.stringify(priceOutputData)}) 
})

app.listen(port, () => console.log(`app listening at http://localhost:${port}`))