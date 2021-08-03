const { handleQuery, handleFetchByID } = require('../handlers');

describe('handlers', () => {
    test('handleQuery should return website url that contains query', () => {
        expect( handleQuery('2') ).toEqual(["test2.com"]);
    })
    test('handleFetchByID should return website url at index of ID', () => {
        expect( handleFetchByID('2') ).toEqual({"test2.com":"1"});
    })
})