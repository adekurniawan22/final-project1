const { postgres } = require('../config/db');

const createReflections = async (req, res) => {
    try {
        const authenticatedUserId = res.dataUser.id;
        const { success, low_point, take_away } = req.body;

        //query
        await postgres.query(`INSERT INTO reflections (success, low_point, take_away, owner_id, created_date, modified_date) VALUES ($1,$2,$3,$4,$5,$6)`, [success, low_point, take_away, authenticatedUserId, new Date(), new Date()]);

        return res.status(201).json({ message: 'Success create new reflections' });
    } catch (error) {
        return res.status(500).json(error);
    }

}

const getReflection = async (req, res) => {
    try {
        const authenticatedUserId = parseInt(res.dataUser.id);
        console.log(authenticatedUserId);

        //query
        const dataReflection = await postgres.query(`SELECT * FROM reflections WHERE owner_id=${authenticatedUserId}`);

        return res.status(200).json(dataReflection.rows);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const updateReflections = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const authenticatedUserId = res.dataUser.id;
        const { success, low_point, take_away } = req.body;

        //query
        const dataUser = await postgres.query(`SELECT * FROM reflections WHERE owner_id=${+authenticatedUserId}`);

        //check id in params it is right or wrong
        for (var i = 0; i < dataUser.rowCount; i++) {
            if (dataUser.rows[i].id == id) {
                await postgres.query(`UPDATE reflections SET success=$1, low_point=$2, take_away=$3, owner_id=$4, modified_date=$5 WHERE id=$6`, [success, low_point, take_away, + authenticatedUserId, new Date(), id]);

                return res.status(201).json({ message: 'Success update reflection' });
            }
        }
        return res.status(500).json({ message: 'This reflection id not found on params' })
    } catch (error) {
        return res.status(500).json(error);
    }
}

const deleteReflection = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const authenticatedUserId = parseInt(res.dataUser.id);
        const dataUser = await postgres.query(`SELECT * FROM reflections WHERE owner_id=${+authenticatedUserId}`);
        for (var i = 0; i < dataUser.rowCount; i++) {
            if (dataUser.rows[i].id == id) {
                await postgres.query(`DELETE FROM reflections WHERE id=$1`, [id]);
                return res.status(201).json({ message: 'Success delete reflection' });
            }
        }
        return res.status(500).json({ message: 'This reflection id not found on params' });
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = {
    getReflection,
    createReflections,
    updateReflections,
    deleteReflection
};

