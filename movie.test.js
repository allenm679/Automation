const {Builder, Capabilites, By} = require('selenium-webdriver');
require('chromedriver');

beforeEach(async() => {
    await driver.get('http://localhost:5500/exercises/automation/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

const addMovie = async (driver) => {
}


describe('Movie site is functional', () => {

      test('Add a movie', async () => {
        await addMovie(driver)
        await driver.sleep(3000)
    }) 
    it('checks the cross-out ft', async (driver) => {
        await crossOut(driver)
        await driver.sleep(3000)
    })
    it('checks delete functionality' , async (driver) => {
        await deleteMovie(driver)
        await driver.sleep(3000)
    })
    it('checks "watched" alert is working' , async (driver) => {
        await watchedAlert(driver)
        await driver.sleep(3000)
    })
})

