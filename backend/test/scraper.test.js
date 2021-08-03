const websites = require('../websites');
const { _, scrapePages} = require('../scraper')

describe("web scraper", () => {
    test("should recieve responses from fetch api in good time", () => {
        let t0 = new Date().getTime();
        let _ = scrapePages(websites); 
        let t1 = new Date().getTime();
        expect(t1-t0).toBeLessThan(1000);
    })
})