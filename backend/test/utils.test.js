const { getRandIdx } = require("../utils");
const websites = require("../data/websites");

describe("utils", () => {
    test("getRandIdx should return an index between 0 and the last element in websites", () => {
        const idx = getRandIdx();
        expect(idx).toBeGreaterThanOrEqual(0);
        expect(idx).toBeLessThan(websites.length);
    })
})