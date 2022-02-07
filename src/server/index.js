const express = require('express');
// react runs on port 3000 by default
const port = 9000;
const app = express();

// for this to work you might need to run 
// $npm install --save cors
// from /server
var cors = require("cors");

app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello world from server!');
});
app.get('/testAPI', (req, res) => {
    res.send('Test from server - connection succesful!');
});

app.listen(port, () => {
    console.log("Taiga server listening on port " + port);
});