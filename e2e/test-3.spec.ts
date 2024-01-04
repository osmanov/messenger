import {test, devices} from '@playwright/test';

test.use(devices['iPhone 11']);
test('test', async ({page}) => {
  await page.goto('http://localhost:3000/messenger');
  await page.locator('div').filter({hasText: 'Björksinger'}).nth(3).click();
  await page.getByPlaceholder('Write a message...').click();
  await page.getByPlaceholder('Write a message...').fill('hello world');
  await page.getByPlaceholder('Write a message...').press('Enter');
  await page.getByText('hello world').click();
});
