const { verifyToken } = require('../helper/jwt');
const { postgres } = require('../config/db');

async function authentication(req, res, next) {
    try {
        const token = req.headers.authorization;
        const userDecoded = verifyToken(token);
        const user = await postgres.query(`SELECT * FROM users WHERE id=${+userDecoded.id}`);

        if (!user) {
            return res.status(500).json({ message: 'You must login first' });
        }
        res.dataUser = user.rows[0];
        next();
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = authentication;