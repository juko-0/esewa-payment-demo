const express = require("express");
const router = express.Router();

router.get("/success", (req, res) => {
    console.log(req.query);
    res.send("Payment successful!");
});

router.get("/failure", (req, res) => {
    console.log(req.query);
    res.send("Payment failed!");
});

module.exports = router;