const websites = require('./websites');

// const fetch = require('fetch');
const fetch = require('node-fetch');

async function scrapePage(url) {
    const resp = await fetch(url);
    const text = await resp.text();
    return text;
}

async function main() {
    let resp = await scrapePage('https://github.com/');
    console.log(resp);
}

function countOccurences(re, str) {
    return (str.match(re) || []).length;
}

async function getMatches(query) {

    // console.log(`searching for ${query}...`)

    let matches = [];
    let re = RegExp(`${query}`, "g") 

    for (url of websites) {
        // console.log(`scraping ${url}`);

        let content;
        let count;

        try {
            content = await scrapePage(url);
            count = await countOccurences(re, content);
        } catch (err) {
            console.log(err.message);
        }
        // console.log(count);
        matches.push([url, count]);
    }

    return matches;
}

function sortByScore(a, b) {
    if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (a[1] > b[1]) ? -1 : 1;
    }
}

async function getOrderedOccurenceList(query) {
    const results = await getMatches(query);
    return results.sort(sortByScore);
    // console.log(`websites that include \'${query}\' are :`);
    // for ( res of results ) {
    //      console.log(res);
    // }
    // return results;
}

module.exports = getOrderedOccurenceList;