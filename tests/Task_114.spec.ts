import test from "@playwright/test";

test ('Task 114' ,async({page}) =>{

    await page.goto('https://www.tutorialspoint.com/selenium/practice/text-box.php')
    await page.getByRole('button' , {name:'Widgets'}).click();

    await page.getByRole('link' , {name:'Auto Complete'}).click()
    await page.locator('#tags').fill('a');

    const selectitem = await page.getByRole('button' ,{name:'Haskell'})
    selectitem.click()

   })