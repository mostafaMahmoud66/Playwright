import test, { expect } from "@playwright/test";

test ('Task 110' ,async({context,page}) =>{

    const mainPage=page;

    await mainPage.goto('https://www.tutorialspoint.com/selenium/practice/text-box.php')

    await mainPage.getByRole('button',{name:'Alerts, Frames & Windows'}).click()
    await mainPage.getByRole('link',{name:'Browser Windows'}).click()
    const tabPage = context.waitForEvent('page')
    await mainPage.getByRole('button' , {name:'New Tab'}).click()
    const newTab = await tabPage;
    await newTab.waitForLoadState();
    await expect(newTab.locator("body")).toContainText("New Tab");


   })