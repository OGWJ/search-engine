const express = require('express');
const cors = require('cors');
const app = express();
const websites = require('./websites');
const { handleQuery, handleFetchByID } = require('./handlers');

app.use(express.json())
app.use(cors())

app.get('/:query', (req, res) => {
    res.send(handleQuery(req.params.query));
})

app.get('/getpage/:id', (req, res) => {
    res.send(handleFetchByID(req.params.id));
})

module.exports = app;