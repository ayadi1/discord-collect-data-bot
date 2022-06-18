// {
//   "TOKEN": "OTcyODgwNDU2MDc4OTk5NjEy.G9lvlD.kPL59nFpvKfxkHSLGLCgH8gxqVcDRxiGLt-2p4",
//   "DB_HOST": "sql211.epizy.com",
//   "DB_NAME": "epiz_30002253_discord_bot_db",
//   "DB_USER": "epiz_30002253",
//   "DB_PASSWORD": "vH30e6Yj3WM",
//   "CHANEL_ID": "987450876962701384"
// }
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: 'sql211.epizy.com',
  user: 'epiz_30002253',
  password: "vH30e6Yj3WM",
  database: 'epiz_30002253_discord_bot_db',
});

module.exports = connection;
