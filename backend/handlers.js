const websites = require('./data/websites');
const { _, getOrderedOccurenceList } = require('./scraper');
const { getRandIdx, spellCheck } = require('./utils');
const addUrlBias = require('./addUrlBias');

async function handleQuery(query) {
    // split multiword query by '+'
    let splitQuery = query.split('+');
    let checkedWords = [];
    let matchingUrls = [];

    // check each word
    // push word into checked
    // if mispelt, push array of suggested words instead.
    for (word of splitQuery) {
        // use buffer becuase spellCheck can return an arr
        let buffer = spellCheck(word);
        // push contents into checkedWords
        for (resp of buffer) {
            checkedWords.push(resp);
        }
    }

    let results = await getOrderedOccurenceList(checkedWords);
    results = addUrlBias(results, checkedWords);

    return results;
}

function handleFetchByID(id) {
    return id < websites.length - 1 ? { [websites[id]] : id } : { [websites[websites.length-1]] : websites.length };
}

module.exports = { handleQuery, handleFetchByID };