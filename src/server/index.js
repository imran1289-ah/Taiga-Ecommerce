const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');

// React runs on port 3000 by default
const port = 9000;
const app = express();

// Add Express.js middleware
app.use(cors());

mongoose.connect('mongodb://localhost:27017/taiga');
const connection = mongoose.connection;

app.get('/', (req, res) => {
    res.send('Hello world from server!');
});
app.get('/testAPI', (req, res) => {
    res.send('Test from server - connection succesful!');
});

app.listen(port, () => {
    console.log('Taiga server listening on port ' + port);
});
