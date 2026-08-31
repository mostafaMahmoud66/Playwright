import test from "@playwright/test";

test ('Task 109' ,async({page}) =>{

    await page.goto('https://www.tutorialspoint.com/selenium/practice/text-box.php')

    await page.getByRole('button', {name:'Forms'}).click()
    await page.getByRole('link', {name:'Practice Form'}).click()
    
const date = new Date();
date.setMonth(date.getMonth() - 2);
const twoMonthsAgo = date.toISOString().split("T")[0];
await page.locator("#dob").fill(twoMonthsAgo);

const hobbies = page.locator('input[type="checkbox"]');
await hobbies.nth(0).check();
await hobbies.nth(1).check();
await hobbies.nth(2).check();
await page.getByRole('button', {name:'Login'}).click()

await page.screenshot({
        path: "109.png"  });
   })