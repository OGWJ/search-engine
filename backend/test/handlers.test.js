const { handleQuery, handleFetchByID } = require('../handlers');
// const { getOrderedOccurenceList } = require('../scraper');
const websites = require('../data/websites');

// web scraping can take some time
jest.setTimeout(9000);

// const getOrderedOccurenceList = jest.fn();

describe('handleQuery', () => {

    test('should return an array of website urls occurances of that query in the HTML', async () => {
        const data = await handleQuery('google');
        expect(data).toBeInstanceOf(Array);
        expect(data).toHaveLength(websites.length);
    })

    // TODO: investigate this test
    // test('getOrderedOccuranceList should be called', () => {
    //     expect(getOrderedOccurenceList).toHaveBeenCalled();
    // })
})