const { client } = require("./rediscon");
const getCache = function (key) {
    return new Promise((resolve, reject) => {
        client.get(key, (err, data) => {
            if (err) {
                console.log(`Error in getCache: ${err}`);
                reject(err);
            }
            resolve(data);
        });
    });
};

const setCache = function (key, value) {
    client.set(key, value, (err, result) => {
        if (err) {
            console.log(`Error in setCache: ${err}`);
            return err;
        }
        return result;
    });
};

module.exports = {
    getCache,
    setCache
};
