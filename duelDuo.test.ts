
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Draw Button Gives Choices', async () => {
    const draw = await driver.findElement(By.id('draw'));
    draw.click();
    const choices = await driver.findElement(By.id('choices'))
    const displayed = await choices.isDisplayed()
    expect(displayed).toBe(true)
})

test('Can add to Duo', async () => {
    const draw = await driver.findElement(By.id('draw'));
    draw.click();
    await driver.sleep(5000)
    const addDuo = await driver.findElement(By.xpath("//button[contains(text(),'Add to Duo')]"))
    addDuo.click()
    const playersDuo = await driver.findElement(By.id('player-duo'))
    const displayed = await playersDuo.isDisplayed()
    expect(displayed).toBe(true)
})