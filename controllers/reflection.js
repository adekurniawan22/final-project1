const { postgres } = require('../config/db');

const getReflection = async (req, res) => {
    try {
        const id = req.params.id;
        const dataReflection = await postgres.query(`SELECT * FROM reflections WHERE owner_id=${+id}`);
        return res.status(200).json(dataReflection.rows);
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = { getReflection };

