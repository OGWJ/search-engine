const { handleQuery, handleFetchByID } = require('../handlers');
const websites = require('../websites');

describe('handlers', () => {
    test('handleQuery should return website url that contains query', () => {
        expect(handleQuery('2')).toEqual(["test2.com"]);
    })

    test('handleQuery should return an empty array if no urls match query', () => {
        expect(handleQuery('sdfjkasdghjsdfbnmxcvhjkasdgjh')).toEqual([]);
    })

    test('handleFetchByID should return website url at index of ID', () => {
        expect(handleFetchByID('2')).toEqual({"test3.com": 3});
    })

    test('handleFetchByID should return last website in array if index is out of range', () => {
        expect(handleFetchByID('999999')).toEqual({"test3.com": 3});
    })

})