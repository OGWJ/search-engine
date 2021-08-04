const websites = require('./data/websites');
const { getRandIdx, sortByScore } = require('./utils');

// const fetch = require('fetch');
const fetch = require('node-fetch');

function countOccurences(re, str) {
    return (str.match(re) || []).length;
}

async function scrapePages(urlList) {

    let fetchPromises = [];
    let textPromises = [];
    let scrapedContent = [];

    for (url of urlList) {
        fetchPromises.push(fetch(url));
    }

    await Promise.all(fetchPromises)
        .then(responses => {
            for(promise of responses) {
                textPromises.push(promise.text());
            }
        })

    await Promise.all(textPromises)
        .then(responses => {
            for (text of responses ) {
                scrapedContent.push(text);
            }
        })
    return scrapedContent;
}

async function getMatches(query) {

    let matches = [];
    let reArr = [];
    let html;

    for (word of query) {
        reArr.push(RegExp(`${word}`, "g"));
    }

    try {
        html = await scrapePages(websites);
    } catch(err) {
        console.log(err);
    }

    let idx = 0;

    for (page of html) {

        let count = 0;
        for (re of reArr) {
            count += await countOccurences(re, page);
        }
        matches.push([websites[idx++], count]);
    }

    return matches;
}

async function getOrderedOccurenceList(query) {
    const results = await getMatches(query);
    return results.sort(sortByScore);
}

module.exports = { getOrderedOccurenceList, scrapePages };