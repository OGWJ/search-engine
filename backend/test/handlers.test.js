const { handleQuery, handleFetchByID } = require('../handlers');
const websites = require('../websites');

// web scraping takes some time, make timeout 12s
jest.setTimeout(12000);

describe('handlers', () => {

    test('handleQuery should return an array of website urls occurances of that query in the HTML', async () => {
        const data = await handleQuery('google');
        expect(data).toBeInstanceOf(Array);
        expect(data).toHaveLength(websites.length);
    })

})