const CHANEL_ID = process.env['CHANEL_ID'];
const db = require("../db");
const { getUserById, updateWallet } = require("../query");
const { getWallet } = require("../functions");

module.exports = async (message) => {
  if (message.channelId == CHANEL_ID) {
    if (message.content.startsWith("!updateWallet")) {
      if (!getWallet(message.content)) {
        message.reply({
          content: "make sure that the message is correct formatting",
        });
      } else {
        await db.query(getUserById(), message.author.id, (err, rows, files) => {
          if (err) {
            console.log(err);
            return;
          }
          if (rows.length >= 1) {
            try {
              db.query(
                updateWallet(),
                [getWallet(message.content), message.author.id],
                (err_, result, files_) => {
                  if (err_) {
                    console.log(err_);
                    return;
                  }
                  message.reply({
                    content: "your wallet was successfully updated",
                  });
                }
              );
            } catch (error) {}
          } else {
            message.reply({
              content:
                "you are not in the list of wallet please use !addWallet to add your wallet ",
            });
          }
        });
      }
    }
  }
};
