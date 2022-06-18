module.exports.getUserById = () => {
  return "SELECT `id`, `wallet` FROM `users` WHERE `id` =?";
};

module.exports.addWallet = () => {
  return "INSERT INTO `users`(`id`, `wallet`) VALUES ( ? , ?)";
};

module.exports.addUser = () => {
  return "INSERT INTO `users`(`id`, `type`) VALUES (?,?)";
};

module.exports.updateWallet = (id, wallet) => {
  return "UPDATE `users` SET `wallet`=? WHERE `id` = ?";
};
