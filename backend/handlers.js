const websites = require('./websites');

function handleQuery(query) {
    var res = websites.filter( website => {
            return (website.includes(query));
        });
    return res;
}

function handleFetchByID(id) {
    // return id > websites.length - 1 ? websites[id] : websites[websites.length - 1];
    return { [websites[id]] : id };
}

module.exports = { handleQuery, handleFetchByID };