const { getCache, setCache } = require("../models/cache_model");

const testRedis = async function (req, res) {
    const dateObj = new Date();
    const nowTime = "Time: " + dateObj.getHours() + ":" + dateObj.getMinutes() + ":" + dateObj.getUTCSeconds();
    console.log(`Now: ${nowTime}`);
    setCache("server_time", nowTime);
    const serverTime = await getCache("server_time");
    res.status(200).send(serverTime);
};

module.exports = {
    testRedis
};
