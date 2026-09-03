const express = require("express");

const router = express.Router();

const payReq = require("./payReq");
const status = require("./status");

router.use("/pay", payReq);
router.use("/status", status);


module.exports = router;