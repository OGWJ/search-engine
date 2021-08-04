const { handleQuery, handleFetchByID } = require('../handlers');
const websites = require('../websites');

// web scraping can take some time
jest.setTimeout(7000);

describe('handlers', () => {

    const data = handleQuery('google');

    test('handleQuery should return an array of website urls occurances of that query in the HTML', async () => {
        expect(data).toBeInstanceOf(Array);
        expect(data).toHaveLength(websites.length);
    })

})