import test, { expect } from "@playwright/test";

test ('Task 103' , async({page})=>{
await page.goto('https://www.tutorialspoint.com/selenium/practice/text-box.php')

await page.getByRole('link' , {name :'Radio Button'}).click()
await page.locator('input[value="igotthree"]').check()

const locator = await page.locator('#check1')
await expect(locator).toContainText('You have checked Impressive')
})


