const websites = require('./data/websites');
const Typo = require('typo-js')
const dictionary = new Typo('en_US');

function getRandIdx() {
    return Math.floor(Math.random() * websites.length);
}

function sortByScore(a, b) {
    if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (a[1] > b[1]) ? -1 : 1;
    }
}

function spellCheck(str) {
    let arr = str.split(' ');
    for (word of arr) {
        // word not recognized
        if (!dictionary.check(word)) {
            // add suggestions to query
            let suggestions = dictionary.suggest(word);
            for (suggestion of suggestions) {
                arr.push(suggestion)
            }
            // remove typo
            arr.pop(word);
        }
    }
    return arr;
}

module.exports = { getRandIdx, sortByScore, spellCheck };