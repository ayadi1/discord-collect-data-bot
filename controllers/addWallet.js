const CHANEL_ID = process.env['CHANEL_ID'];
const db = require("../db");
const { getUserById, addWallet } = require("../query");
const { getWallet } = require("../functions");

module.exports = async (message) => {
  if (message.channelId == CHANEL_ID)
    if (message.content.startsWith("!addWallet")) {
      if (!getWallet(message.content)) {

        message.reply({
          content: "make sure that the message is correct formatting",
        });
      } else {
        db.query(getUserById(), message.author.id, (err, rows, fields) => {
          if (rows.length >= 1) {
            message.reply({
              content:
                "you are already sand your wallet use !checkWallet to check your wallet ",
            });
          } else {
            db.query(
              addWallet(),
              [message.author.id, getWallet(message.content)],
              (err_, rows_, fields_) => {
                if (err_) {
                  console.log(err_);
                  return;
                }
                message.reply({
                  content: "you wallet was successfully added to the database ",
                });
              }
            );
          }
        });
      }
    }
};
