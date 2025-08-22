const puppeteer = require('puppeteer')

const scraper = async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto("https://news.ycombinator.com")

    const data = await page.evaluate(() => {
        const items = Array.from(document.querySelectorAll('.athing')).map(element => {
            const title = element.querySelector('.titleline > a');
            const rank = element.querySelector('.rank');
            const subtext = element.nextElementSibling.querySelector('.subtext');
            const score = subtext.querySelector('.score');
            const comments = subtext.querySelector('.subline > a:nth-of-type(3)');

            return {
                rank: rank?.textContent || null,
                title: title?.textContent || null,
                score: score?.textContent || null,
                comments: comments?.textContent || null
            }
        });
        return items;
    })
    await browser.close();
    return data;
}

module.exports = scraper


