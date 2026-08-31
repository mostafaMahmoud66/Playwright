import test, { expect } from "@playwright/test";

test ('Task 108' ,async({page}) =>{

    await page.goto('https://www.tutorialspoint.com/selenium/practice/text-box.php')
    await page.getByRole('link',{name: 'Dynamic Properties'}).click()
    await page.locator('#colorChange').click()

    const button = await page.getByRole('button',{name:'Visible After 5 Seconds'})

    await expect (button).toBeVisible({timeout:6000})

})