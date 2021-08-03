const websites = require('./websites');

function getRandIdx() {
    return Math.floor(Math.random() * websites.length);
}

module.exports = getRandIdx;