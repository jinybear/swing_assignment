const { userService } = require("../services");

const getUserState = (req, res) => {
  try {
    const foundUser = userService.getUserState(Number(req.params.id));
    if (!foundUser) {
      const error = new Error("not_exist");
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({ riding_state: foundUser.riding_state });
    //res.status(200).json({ foundUser });
  } catch (err) {
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = {
  getUserState,
};
