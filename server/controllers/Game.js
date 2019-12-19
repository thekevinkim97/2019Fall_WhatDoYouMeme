const express = require('express');
const { Game } = require("../models/Game");
const { CustomError } = require('../models/CustomError');

app.get('/', (req, res)=>{
    res.send(Game.Get_State());
} );
app.get('/hand', (req, res)=>{
    res.send(Game.Get_Hand());
} );
app.get('/picture/flip', (req, res)=>{
    if(req.user_id != Game.Dealer){
        throw new CustomError(403, "Only the dealer can flip the picture")
    }
} );
app.post('/players', (req, res)=>{
    const player_id = Game.Join(req.body.name);
    res.send({ success: true, player_id });
} );



module.exports = app;