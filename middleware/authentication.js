const { verifyToken } = require('../helper/jwt');
const UserModels = require('../models/queries');

async function authentication(req, res, next) {
    try {
        const token = req.headers.authorization;
        const userDecoded = verifyToken(token);
        const user = await UserModels.postgres.query(`SELECT * FROM users WHERE id=${+userDecoded.id}`);

        if (!user) {
            return res.status(500).json({ message: 'You must login first' });
        }
        res.dataUser = user.rows[0];
        next();
    } catch (error) {
        return res.status(500).json({ message: 'hahaha' });
    }
}

module.exports = authentication;