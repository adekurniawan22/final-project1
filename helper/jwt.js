const jwt = require('jsonwebtoken');
const SECRET = "Rahasia";

function generateToken(payload) {
    const token = jwt.sign(payload, SECRET);
    return token;
}

function verifyToken(token) {
    const decoded = jwt.verify(token, SECRET);
    return decoded;
}

module.exports = { generateToken, verifyToken }