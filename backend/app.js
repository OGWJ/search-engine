const express = require('express');
const cors = require('cors');
const app = express();
const websites = require('./websites');
const { handleQuery, handleFetchByID } = require('./handlers');
const { spellCheck, getRandIdx } = require('./utils');

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('');
})

app.get('/:query', (req, res) => {
    let data = handleQuery(req.params.query)
        .then(data => res.send(data));
})

app.get('/getpage/:id', (req, res) => {
    res.send(handleFetchByID(req.params.id));
})

app.get('/getpage/random', (req, res) => {
    res.send(handleFetchByID(getRandIdx()))
})

module.exports = app;