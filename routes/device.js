const express = require("express")
const authMiddleware = require("../middlewares/auth.middleware");
const getDevice = require("../controllers/device");

const router = express.Router()

router.get("/:userId",authMiddleware,getDevice)


module.exports = router