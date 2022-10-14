const { verifyToken } = require('../helper/jwt');
const UserModels = require('../models/queries');

async function authentiction(req, res, next) {
    try {
        const token = req.headers.Authorization;
        const userDecoded = verifyToken(token);
        const user = await UserModels.postgres.query(`SELECT * FROM users WHERE id= ${userDecoded.id}`);

        if (!user) {
            return res.status(500).json({ message: 'You can acces this endpoint' });
        }
        next()
    } catch (error) {
        return res.status(500).json(error);

    }
}

module.exports = authentiction;