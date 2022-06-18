module.exports.getWallet = (message) => {
  //check format
  if (message.length > 500) {
    return false;
  }
  const flag = message.split(" ")[0];
  if (flag !== "!addWallet" && flag !== "!updateWallet" && flag !== "!checkWallet"  ) {
    return false;
  }
  //get wallet
  const indexOfFirstSpace = message.indexOf(" ");
  const walletText = message.slice(indexOfFirstSpace).trim();
  return walletText;
};
