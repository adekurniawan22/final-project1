const express = require('express');
const User = require('./models/queries');
const authentication = require('./middleware/authentication');
const app = express();
const port = 4000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
app.get('/api/v1', (req, res) => { res.render('index') })
app.post('/api/v1/users/register', User.register);
app.post('/api/v1/users/login', User.login);
app.use(authentication);
app.post('/api/v1/reflections', User.createReflections)

//listen the connections on port
app.listen(port, () => {
    console.log(`Server running in http://localhost:${port}/api/v1`);
})