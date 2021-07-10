const router = require("express").Router();
const { testRedis } = require("../controllers/page_controller");
router.route("/testRedis").get(testRedis);
module.exports = router;
