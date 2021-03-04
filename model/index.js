let datas = require("./db");

const updateUser = (riding_state, userId) => {
  let modified;

  user = datas.users.find((user) => user.id === userId);
  if (!user || user.riding_state === riding_state) {
    const error = new Error(`riding_state is already [${riding_state}]`);
    error.statusCode = 400;
    throw error;
  }

  datas.users = datas.users.map((user) => {
    if (user.id === userId) {
      modified = {
        ...user,
        riding_state,
      };

      if (riding_state === "Riding") {
        modified.on_at = parseInt(Date.now() / 1000);
      }

      return modified;
    }

    return user;
  });

  return modified;
};

module.exports = {
  datas,
  updateUser,
};
