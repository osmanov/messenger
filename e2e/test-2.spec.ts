import {test, expect} from '@playwright/test';

test('test', async ({page}) => {
  await page.goto('http://localhost:3000/messenger');
  const sidebar = await page.getByTestId('sidebar');
  await expect(sidebar).toBeDefined();
  const count = await sidebar.locator('> div');
  await expect(count).toHaveCount(6);
  expect(await page.screenshot({fullPage: true})).toMatchSnapshot();
});
