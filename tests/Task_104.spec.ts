import test, { expect } from "@playwright/test";

test ('Task 104' , async({page})=>{
await page.goto('https://www.tutorialspoint.com/selenium/practice/text-box.php')

await page.getByRole('link' , {name :'Web Tables'}).click();
await page.getByRole('button' ,{name:'Add'}).click();
await page.getByPlaceholder('First Name').fill('Mostafa')
await page.getByPlaceholder('Last Name').fill('Hussein')
await page.getByPlaceholder('Enter Email').fill('mostafa.mahmoud@linkdev.com')
await page.getByPlaceholder('Enter Age').fill('3333')
await page.getByPlaceholder('Enter Salary').fill('13333333333333333300')
await page.getByPlaceholder('Enter Department').fill('Mechatronics')
await page.screenshot({ path: '104.png' });


await page.getByRole('button',{name:'Login'}).click()
const deleteButtons = page.locator("a.delete-wrap");

const count = await deleteButtons.count();

for (let i = 0; i < count; i++) {
    await deleteButtons.nth(0).click();
}
await expect(page.locator("table tbody")).toBeEmpty();


})