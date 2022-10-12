const db = require('../config/db');

function register(req, res) {
    const { email, password } = req.body;
    db.query('INSERT INTO users (email,password) VALUES ($1,$2)', [email, password], (error, result) => {
        if (error) {
            return res.status(500).json(
                {
                    message: 'Something wrong'
                }
            )
        }
        return res.status(201).json(
            {
                message: 'Success create new user'
            }
        )
    })
}