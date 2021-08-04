const websites = require('../data/websites');
const { _, scrapePages} = require('../scraper')

describe("web scraper", () => {

    let scrapings;

    test("should recieve responses from fetch api in good time", async () => {
        let t0 = new Date().getTime();
        scrapings = await scrapePages(websites);
        let t1 = new Date().getTime();
        expect(t1-t0).toBeLessThan(5000);
    }),

    test("return type to be an array of non-empty strings", () => {
        expect(scrapings).toBeInstanceOf(Array);
        for(page of scrapings) {
            expect(typeof page).toBe('string');
             expect(page.length).toBeGreaterThan(0);
        }
    }),

    test("returned array should include every website in list", () => {
        expect(scrapings.length).toBe(websites.length);
    })
})