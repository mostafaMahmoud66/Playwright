import test from "@playwright/test";

test ('Task 107' ,async({page}) =>{

    await page.goto('https://www.tutorialspoint.com/selenium/practice/text-box.php')
    await page.getByRole('link' ,{name:'Upload and Download'}).click();

     await page.locator('input[type="file"]').setInputFiles(
    'C:/Users/mostafa.mahmoud/Downloads/link.pdf' );

        await page.screenshot({ path: '107.png' });

    

})