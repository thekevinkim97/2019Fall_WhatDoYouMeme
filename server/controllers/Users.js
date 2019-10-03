const express = require('express');
const users = require('../models/Users');

const app = express.Router();

//returns list of users
app.get('/', (req, res) => res.send(users))
app.post('/', (req, res) => {
    users.push(req, res)
    res.send(users[users.length - 1]);
})


module.exports = app;