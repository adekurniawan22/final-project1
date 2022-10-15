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

        return res.status(200).json({ message: 'Success create new user' })
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

        //checking password
        if (query.rowCount > 0) {
            if (password == query.rows[0].password) {
                const token = generateToken({ id: dataLogin.id });
                return res.status(200).json({ token: token });
            } else {
                return res.status(500).json({ message: 'Wrong password' })
            }
        } else {
            return res.status(500).json({ message: 'User not found' })
        }
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = { register, login }