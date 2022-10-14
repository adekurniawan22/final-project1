const { generateToken, verifyToken } = require('../helper/jwt');
const { postgres } = require('../config/db');

const register = (req, res) => {
    try {
        const { email, password } = req.body;
        //checking value email and password
        if (email === "" || password === "") {
            return res.status(500).json({ message: 'Email and password cannot be empty' })
        }
        //query
        postgres.query(`INSERT INTO users (email,password) VALUES ($1,$2)`, [email, password]);
        return res.status(201).json({ message: 'Success create new user' })
    } catch (error) {
        return res.status(500).json(error)
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        //checking value email and password
        if (email === "" || password === "") {
            return res.status(500).json({ message: 'Email and password cannot be empty' })
        }
        const query = await postgres.query(`SELECT * FROM users WHERE email = '${email}'`);
        const dataLogin = query.rows[0];

        if (query.rowCount > 0) {
            if (password == query.rows[0].password) {
                const token = generateToken({ id: dataLogin.id });
                return res.status(200).json({ token: token });
            } else {
                return res.status(500).json({ message: 'Wrong password' })
            }
        } else {
            return res.status(500).json({ message: 'User Not Found' })
        }
    } catch (error) {
        return res.status(500).json(error)
    }
}

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
        return res.status(201).json(error);
    }

}

const getData = async (req, res) => {
    return res.status(200).json({
        message: 'Hallo'
    });
}

module.exports = {
    register,
    login,
    getData,
    createReflections
}    