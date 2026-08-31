import test, { expect } from "@playwright/test";

test ('Task 105' ,async({page,context}) =>{

    await page.goto('https://www.tutorialspoint.com/selenium/practice/text-box.php')
    await page.getByRole('link' , {name:'Buttons'}).click()
    await page.getByRole('button' , {name : 'Click Me' , exact:true }).click()
    await expect(page.locator('#welcomeDiv')).toHaveText('You have done a dynamic click')


})