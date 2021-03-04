const { datas, updateUser } = require("../model");

const getOnKickboard = (user_id) => {
  return updateUser("Riding", user_id);
};

const getOffKickboard = (user_id) => {
  return updateUser("Normal", user_id);
};

const getKickboards = () => {
  return datas.kickboards.reduce((accumulate, currentValue) => {
    if (currentValue.battery >= 20) {
      data = {
        lng: currentValue.lng,
        lat: currentValue.lat,
        shortImei: currentValue.shortImei,
        battery: currentValue.battery,
      };
      accumulate = [...accumulate, data];
    }
    return accumulate;
  }, []);
};

module.exports = {
  getOnKickboard,
  getOffKickboard,
  getKickboards,
};
