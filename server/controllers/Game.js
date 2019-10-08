const express = require('express');
const users = require("../models/Users");
const app = express.Router();

const game = {
    users: [],
    pictureCards: [],
    quoteCards: [],

    dealer = 0
}

app.post('/join', (req, res) => {
    const userId = req.query.userId
    game.users.push(users[userId])
    res.send(users[userId])
})

module.export = app;