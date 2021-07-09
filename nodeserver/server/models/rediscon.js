require("dotenv").config();
const { REDISHOST, REDISPORT } = process.env;
const redis = require("redis");
const client = redis.createClient(REDISPORT, REDISHOST);
module.exports = { client };
