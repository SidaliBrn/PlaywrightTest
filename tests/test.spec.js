//const{test,expect}=require('@playwright/test');
import{test,expect} from '@playwright/test';

test('campus france automation',async ({page})=>{
  await page.goto('https://www.campusfrance.org/fr');
  await page.click('#tarteaucitronPersonalize2');
  await page.click('#block-campusconnexionoumoncompte > div.bouton.connexion');
  /*await page.fill('#edit-name','braikchs@gmail.com');*/
  await page.click('//*[@id="block-campusconnexionoumoncompte"]/div[2]/a[1]');
  

  /*await page.evaluate(() => {
    window.scrollBy(0, 400); // Scroll down by 400 pixels
    });*/

  await page.fill('#edit-name.username.form-text.required','braikchs@gmail.com');
  await page.fill('#edit-pass-pass1','123456789Braik');
  await page.fill('#edit-pass-pass2','123456789Braik');
  await page.click('#edit-field-civilite > div:nth-child(2) > label');
  await page.fill('#edit-field-nom-0-value','khadir');
  await page.fill('id=edit-field-prenom-0-value','abdelhadi');
  await page.click('//*[@id=\"edit-field-pays-concernes-wrapper\"]/div/div/div[1]/div');
  const pays = "-Angola";
  await page.click(`//*[@id="edit-field-pays-concernes-wrapper"]/div/div/div[2]/div/div[text()='${pays}']`);
  await page.fill('#edit-field-nationalite-0-target-id','-Angola');
  await page.fill('id=edit-field-code-postal-0-value','13003');
  await page.fill('id=edit-field-ville-0-value','Marseille');
  await page.fill('id=edit-field-telephone-0-value','0785658923');
  await page.click('#edit-field-publics-cibles > div:nth-child(1) > label');

 
  




  //await page.close();
})