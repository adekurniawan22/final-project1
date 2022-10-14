const { generateToken } = require('../helper/jwt');
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
            const token = generateToken({
                email: dataLogin.email,
                password: dataLogin.password
            })
            return res.status(200).json({ token: token })
        }
    } else {
        return res.status(500).json({ message: 'User Not Found' })
    }


}

module.exports = {
    postgres,
    register,
    login
}    