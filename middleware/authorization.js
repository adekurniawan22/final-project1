const { postgres } = require('../config/db');

const authorization = async (req, res, next) => {
    try {
        const authenticatedUserId = parseInt(res.dataUser.id);
        const user = await postgres.query(`SELECT * FROM users WHERE id=${authenticatedUserId}`);
        if (!user.rows) {
            res.status(500).json({
                message: "Data Not Found"
            })
        }

        if (user.rows[0].id == authenticatedUserId) {
            return next();
        } else {
            return res.status(403).json({
                message: "Forbidden"
            });
        }
    } catch (error) {
        return res.status(500).json(error);
    }

}

module.exports = authorization;