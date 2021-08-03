const websites = require('./websites');
const performance = require('performance');

// const fetch = require('fetch');
const fetch = require('node-fetch');

async function scrapePage(url) {
    const resp = await fetch(url);
    const text = await resp.text();
    return text;
}

function countOccurences(re, str) {
    return (str.match(re) || []).length;
}


// DEV ~ ~ ~ ~ ~ ~ ~ ~

let urlList = ['https://google.com/', 'https://youtube.com/'];

// asyncronous solution
function scrapePages(urlList) {

    let t0 = new Date().getTime();

    let fetchPromises = [];
    let textPromises = [];
    let scrapedContent = [];

    for (url of urlList) {
        fetchPromises.push(fetch(url));
    }

    Promise.all(fetchPromises).then(responses => {
        for(promise of responses) {
            textPromises.push(promise.text());
        }
    }).then(_ => {

    Promise.all(textPromises).then(responses => {
        for (text of responses ) {
            scrapedContent.push(text);
        }
        })
    })

    let t1 = new Date().getTime();
    console.log(`exec time: ${t1-t0}ms`)
    return scrapedContent;
}

scrapePages(websites);

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

async function getMatches(query) {

    let matches = [];
    let reArr = [];

    for (word of query) {
        reArr.push(RegExp(`${word}`, "g"));
    }

    for (url of websites) {

        let content;
        let count = 0;

        try {
            content = await scrapePage(url);

            for (re of reArr) {
                count += await countOccurences(re, content);
            }

        } catch (err) {
            console.log(err.message);
        }
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
}

module.exports = getOrderedOccurenceList;