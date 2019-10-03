const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
//brings over users in local module
const users = require('./models/Users');
const userController = require('./controllers/Users');

//if client sends request with 'get', with path '/'; do function 
app
    .use( function(req, res, next) {
        // Logging
        console.log({
            //logging
            params: req.params, body: req.body, url: req.url, query: req.query, headers: eq.headers
        });
        next();
    })

    .use('/static', express.static(path.join(__dirname, '../NoFramework')))

    .get('/', 
        (req, res) => res.send('Hello World!!!'))

    //Same thing as above!
    .get('/heb', 
        function(req,res) {
            res.send({msg: 'shalom Wolrd!'})
    })

    .get('/users', (req, res) => res.send(users))

    .use('/users', userController);

//app.listen(port, () => console.log(`Example app listening on port ${port}!`));
//or: 
app.listen(port, () => console.log(`Running on http://localhost:${port}`));

//console.log("Running")`