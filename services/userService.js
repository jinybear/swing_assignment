const { datas, updateUser } = require("../model");

const getUserState = (user_id) => {
  return datas.users.find((user) => user.id === user_id);
};

const resetUserOnAt = (user_id) => {
  const index = datas.users.findIndex((user) => user.id === user_id);
  datas.users[index].on_at = 0;
};

module.exports = {
  getUserState,
  resetUserOnAt,
};
