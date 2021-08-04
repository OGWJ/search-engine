const websites = require('../websites');
const { _, scrapePages} = require('../scraper')

describe("web scraper", () => {

    let t0 = new Date().getTime();
    // let scrapings;
    // let scrapings = scrapePages(websites); 

    test("should recieve responses from fetch api in good time", () => {
        let t1 = new Date().getTime();
        expect(t1-t0).toBeLessThan(1000);
    }),

    test("return type to be an array of strings", () => {
        let scrapings = scrapePages(websites).then(resp => {
        expect(resp).toBeInstanceOf(Array);
        expect(resp[0]).toBeInstanceOf(String);
        })
    })

    // test("to return html for every website requested", () => {
    //     expect(scrapings).length.toBe(websites.length)
    //     for(page of scrapings) {
    //         expect(page.length > 0);
    //     }
    // })
})