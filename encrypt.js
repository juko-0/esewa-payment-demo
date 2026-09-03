const crypto = require("crypto");
require("dotenv").config();
function generateSignature(message, secretKey){
    return crypto
    .createHmac("sha256", secretKey)
    .update(message)
    .digest("base64");
}

//testing
const total_amount = 500;
const transaction_uuid = "order-123";
const product_code = "EPAYTEST";

const message = `${total_amount},${transaction_uuid},${product_code}`;

const secretKey = process.env.ESEWA_SECRET_KEY;
const signature = generateSignature(message, secretKey);

console.log("Message:", message);
console.log("Signature:", signature);

module.exports = {message, signature, total_amount, transaction_uuid, product_code};



