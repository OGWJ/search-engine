function addUrlBias(results, query, scalar=0.5) {
    for ([url, score] of results) {
        for (word of query) {
            url.includes(word) ? score += (score * scalar) : score -= (score * (scalar / 5));
        }
    }
    return results;
}

module.exports = addUrlBias;
