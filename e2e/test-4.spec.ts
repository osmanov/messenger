import {test, expect} from '@playwright/test';

test('test', async ({page}) => {
  await page.goto('http://localhost:3000/messages');
  await page
    .locator('div')
    .filter({hasText: 'Tomas Haakedrums'})
    .nth(3)
    .click();
  await page.getByText('Say Hi to Tomas Haake👋').click();
  await page.getByPlaceholder('Write a message...').click();
  await page.getByPlaceholder('Write a message...').fill('hello world');
  await page.getByPlaceholder('Write a message...').press('CapsLock');
  await page.getByPlaceholder('Write a message...').fill('hello world!');
  await page.getByPlaceholder('Write a message...').press('Enter');
  await page.getByText('hello world!').click();
});
