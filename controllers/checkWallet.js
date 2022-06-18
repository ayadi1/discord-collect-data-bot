const CHANEL_ID = process.env['CHANEL_ID'];
const { getUserById } = require("../query");
const db = require("../db");
const { getWallet } = require("../functions");


module.exports = async (message) => {
  if (message.channelId == CHANEL_ID)
    if (message.content.startsWith("!checkWallet")) {
      
      db.query(getUserById(),message.author.id, (err, rows, fields) => {
        if (err) {
          console.log(err);
          return;
        }
        if (rows.length > 0) {
          message.reply({
            content: `hi ${message.author} your wallet is ok \n wallet : ${rows[0].wallet}`,
          });
        } else {
          message.reply({
            content:
              "you don't sand your wallet yat use !addWallet for add you wallet",
          });
        }
      });
    }
};
