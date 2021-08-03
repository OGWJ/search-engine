const websites = require('./websites');

function handleQuery(query) {
    let res = websites.filter( website => {
            return (website.includes(query));
        });
    return res;
}

function handleFetchByID(id) {
    return id < websites.length - 1 ? { [websites[id]] : id } : { [websites[websites.length-1]] : websites.length };
    return { [websites[id]] : id };
}

module.exports = { handleQuery, handleFetchByID };