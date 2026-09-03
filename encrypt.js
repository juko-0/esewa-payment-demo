const crypto = require("crypto");
require("dotenv").config();
function generateSignature(message, secretKey){
    return crypto
    .createHmac("sha256", secretKey)
    .update(message)
    .digest("base64");
}

//testing
const total_amount = 110;
const transaction_uuid = crypto.randomUUID();
const product_code = "EPAYTEST";

const message = `total_amount=${total_amount},transaction_uuid=${transaction_uuid},product_code=${product_code}`;

const secretKey = process.env.ESEWA_SECRET_KEY;
const signature = generateSignature(message, secretKey);

console.log("Secret:", process.env.ESEWA_SECRET_KEY)
console.log("Message:", message);
console.log("Signature:", signature);

module.exports = {message, signature, total_amount, transaction_uuid, product_code};



