const { generateToken, verifyToken } = require('../helper/jwt');
const Postgres = require('pg').Pool;
const postgres = new Postgres({
    user: 'postgres',
    host: 'localhost',
    database: 'final-project1',
    password: 'admin22',
    port: 5432,
})

const register = (req, res) => {
    const { email, password } = req.body;
    postgres.query(`INSERT INTO users (email,password) VALUES ($1,$2)`, [email, password], (error, result) => {
        if (error) {
            return res.status(500).json({ message: 'Something wrong' })
        }
        return res.status(201).json({ message: 'Success create new user' })
    })
}

const login = async (req, res) => {
    const { email, password } = req.body;
    const query = await postgres.query(`SELECT * FROM users WHERE email = '${email}'`);
    dataLogin = query.rows[0];


    if (query.rowCount > 0) {
        if (password == query.rows[0].password) {
            const token = generateToken({ id: dataLogin.id });
            return res.status(200).json({ token: token });
        }
    } else {
        return res.status(500).json({ message: 'User Not Found' })
    }
}

const createReflections = async (req, res) => {
    const authenticatedUserId = res.dataUser.id;
    const { success, low_point, take_away, owner_id, created_date, modified_date } = req.body;
    postgres.query(`INSERT INTO reflections (success, low_point, take_away, owner_id, created_date, modified_date) VALUES ($1,$2,$3,$4,$5,$6)`, [success, low_point, take_away, owner_id, created_date, modified_date], () => {
        if (owner_id != authenticatedUserId) {
            return res.status(500).json({ message: 'You only can create reflection with your id' })
        }
        return res.status(201).json({ message: 'Success create new reflections' })
    })
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