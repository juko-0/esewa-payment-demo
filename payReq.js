const {total_amount, transaction_uuid,product_code,signature}= require('./encrypt.js');
const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
    res.send(`
        <form action="https://rc-epay.esewa.com.np/api/epay/main/v2/form" method="POST">

            <input type="hidden" name="amount" value="${total_amount}">
            <input type="hidden" name="tax_amount" value="0">
            <input type="hidden" name="total_amount" value="${total_amount}">

            <input type="hidden" name="transaction_uuid" value="${transaction_uuid}">
            <input type="hidden" name="product_code" value="${product_code}">

            <input type="hidden" name="product_service_charge" value="0">
            <input type="hidden" name="product_delivery_charge" value="0">

            <input type="hidden" name="success_url"
                value="http://localhost:3000/status/success">

            <input type="hidden" name="failure_url"
                value="http://localhost:3000/status/failure">

            <input type="hidden" name="signed_field_names"
                value="total_amount,transaction_uuid,product_code">

            <input type="hidden" name="signature"
                value="${signature}">

            <button type="submit">
                Pay Rs. ${total_amount} with eSewa
            </button>

        </form>
    `);
});

module.exports = router;