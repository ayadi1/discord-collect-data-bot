const TOKEN = process.env['TOKEN']
const DiscordJS = require("discord.js");
const db = require("./db");
const checkWallet = require("./controllers/checkWallet");
const addWallet = require("./controllers/addWallet");
const updateWallet = require("./controllers/updateWallet");

const client = new DiscordJS.Client({
  intents: new DiscordJS.Intents(32767),
  partials: ["CHANNEL"],
});

client.on("ready", () => {
  console.log("boot is ready");
});

client.on("messageCreate", checkWallet);
client.on("messageCreate", addWallet);
client.on("messageCreate", updateWallet);

// client.on('message',textData)
const startServer = async () => {
  try {
    await db.connect();
  } catch (error) {
    console.log(error);
  }
  client.login('OTcyODgwNDU2MDc4OTk5NjEy.G9lvlD.kPL59nFpvKfxkHSLGLCgH8gxqVcDRxiGLt-2p4');
};
startServer();
