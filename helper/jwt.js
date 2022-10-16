const jwt = require('jsonwebtoken');
const SECRET = "Rah4si4";

function generateToken(payload) {
    const token = jwt.sign(payload, SECRET, { expiresIn: '24h' });
    return token;
}

function verifyToken(token) {
    const decoded = jwt.verify(token, SECRET);
    return decoded;
}

module.exports = { generateToken, verifyToken }