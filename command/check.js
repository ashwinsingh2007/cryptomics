const keyManager = require("../lib/KeyManager");
const crypto_api = require("../lib/crypto_api");
const colors = require("colors");
const pkg = require("../package.json");
const check = {
    async price(cmd) {
        // console.log('==cmd===', cmd.coin, 'coin.cur', cmd.cur)
        try {
            key_manager = new keyManager();
            const key = key_manager.getKey();
            const s = "Devloped by: Ashwani Kumar";
            const l = "https://github.com/ashwinsingh2007";
            const email = "Give a star if you like";

            const api = new crypto_api(key);
            const priceOutputData = await api.getPriceData(cmd.coin, cmd.cur);
            console.log("\n\n\n\n\n\n\n");
            console.log("\t\t\t\t\t", s.yellow, l.red, email.blue)
            console.log("\n");
            console.log(priceOutputData);
            console.log("\n\n\n\n\n\n\n\n\n\n");
        } catch (err) {
            console.error(err.message.red);
        }
    }
};
module.exports = check;