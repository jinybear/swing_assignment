const { userService, kickboardService } = require("../services");

const getOnKickboard = (req, res) => {
  try {
    kickboardService.getOnKickboard(req.body.user_id);
    res.status(200).json({ message: "success" });
  } catch (err) {
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const getOffKickboard = (req, res) => {
  try {
    const { on_at } = kickboardService.getOffKickboard(req.body.user_id);

    const off_at = parseInt(Date.now() / 1000);
    let amount = 0;

    if (on_at > 0 && off_at > on_at) {
      amount = 1250;
      const ridingSeconds = off_at - on_at;

      let ridingMinutes = parseInt(ridingSeconds / 60); // 하차시간(초) - 탑승시간(초) 를 '분'단위로 환산하여 이용시간 확인
      ridingMinutes += ridingSeconds % 60 > 0 ? 1 : 0; // 초과한 초 단위 시간에 대해 '1분 추가 이용' 처리

      amount += ridingMinutes > 5 ? (ridingMinutes - 5) * 180 : 0;

      userService.resetUserOnAt(req.body.user_id);
    }

    console.log("----------------------------------------------------");
    console.log(
      `     킥보드 하차시 요금은 다음과 같습니다 : ${amount} 원      `
    );
    console.log("----------------------------------------------------");

    res.status(200).json({ message: "success" });
  } catch (err) {
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const getKickboards = (req, res) => {
  try {
    const usableKickboards = kickboardService.getKickboards();

    res.status(200).json({ usableKickboards });
  } catch (err) {
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = {
  getOnKickboard,
  getOffKickboard,
  getKickboards,
};
