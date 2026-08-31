import test, { expect } from "@playwright/test";

test ('Task 106' ,async({page}) =>{

    await page.goto('https://www.tutorialspoint.com/selenium/practice/text-box.php')
    await page.getByRole('link' , {name:'Links',exact:true}).click();
    await page.getByRole('link' , {name : 'Not Found'}).click();
    
    const locator = await page.locator('//div[@class="nfound"]');
    await expect(locator).toContainText('Link has responded with staus 404 and status text Not Found')

  await page.getByRole('link', { name: 'Home' }).first().click();
await expect(page.locator('body')).toContainText('Login'); 
})