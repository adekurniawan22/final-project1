const Postgres = require('pg').Pool;
const postgres = new Postgres({
    user: 'postgres',
    host: 'localhost',
    database: 'final-project1',
    password: 'admin22',
    port: 5432,
})

module.exports = { postgres }