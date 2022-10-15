const { postgres } = require('../config/db');

const createReflections = async (req, res) => {
    try {
        const authenticatedUserId = res.dataUser.id;
        const { success, low_point, take_away, owner_id, created_date, modified_date } = req.body;
        await postgres.query(`INSERT INTO reflections (success, low_point, take_away, owner_id, created_date, modified_date) VALUES ($1,$2,$3,$4,$5,$6)`, [success, low_point, take_away, owner_id, created_date, modified_date]);

        if (owner_id != authenticatedUserId) {
            return res.status(500).json({ message: 'You only can create reflection with your id login' });
        }
        return res.status(201).json({ message: 'Success create new reflections' });
    } catch (error) {
        return res.status(500).json(error);
    }

}

const updateReflections = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const authenticatedUserId = res.dataUser.id;
        const { success, low_point, take_away, owner_id, created_date, modified_date } = req.body;
        const dataUser = await postgres.query(`SELECT * FROM reflections WHERE owner_id=${+authenticatedUserId}`);

        if (owner_id != authenticatedUserId) {
            return res.status(500).json({ message: 'You only can edit reflection with your id login' });
        }

        for (var i = 0; i < dataUser.rowCount; i++) {
            if (dataUser.rows[i].id == id) {
                await postgres.query(`UPDATE reflections SET success=$1, low_point=$2, take_away=$3, owner_id=$4, created_date=$5, modified_date=$6 WHERE id=$7`, [success, low_point, take_away, owner_id, created_date, modified_date, id]);

                return res.status(201).json({ message: 'Success update reflections' });
            }
        }
        return res.status(500).json({ message: 'Ga ada' })
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getReflection = async (req, res) => {
    try {
        const authenticatedUserId = parseInt(res.dataUser.id);
        console.log(authenticatedUserId);
        const dataReflection = await postgres.query(`SELECT * FROM reflections WHERE owner_id=${authenticatedUserId}`);
        return res.status(200).json(dataReflection.rows);
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
                return res.status(201).json({ message: 'Success delete reflections' });
            }
        }
        return res.status(500).json({ message: 'Ga ada' });
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

