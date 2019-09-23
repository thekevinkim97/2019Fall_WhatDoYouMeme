const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

//if client sends request with 'get', with path '/'; do function 
app
    .use('/static', express.static(path.join(__dirname, '../NoFramework')))
    .get('/', 
        (req, res) => res.send('Hello World!!!'));

    //Same thing as above!
    //.get('/heb', 
    //    function(req,res) {
    //        res.send('shalom Wolrd!')
    //})

//app.listen(port, () => console.log(`Example app listening on port ${port}!`));
//or: 
app.listen(port, () => console.log(`Running on http://localhost:${port}`));

//console.log("Running")