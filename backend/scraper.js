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

async function getMatches(query) {

    let matches = [];

    for (url of websites) {

        console.log(`scraping ${url}`);
        
        let content = await scrapePage(url);
        
        if (content.includes(query)) {
            matches += url;
        }
    }

    return matches;
}

async function main() {
    const results = await getMatches('google');
    console.log(results);
}

main();