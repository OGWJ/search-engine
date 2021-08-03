const websites = require('./websites');
const getOrderedOccurenceList = require('./scraper');

async function handleQuery(query) {
    // TODO: add url bias to results
    let urlBias = websites.filter( website => {
             return (website.includes(query));
    });
    let results = await getOrderedOccurenceList(query);

    for (let i=0; i < results.length; i++) {
        for (let j=0; j<urlBias.length; j++) {
            if (urlBias[j] == results[i]) {
                results[i][1] *= 2;
            }
        }
        
    }
    console.log(results);
    return results;
}

function handleFetchByID(id) {
    return id < websites.length - 1 ? { [websites[id]] : id } : { [websites[websites.length-1]] : websites.length };
}

module.exports = { handleQuery, handleFetchByID };