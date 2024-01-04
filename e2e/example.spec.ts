import {test, expect, devices} from '@playwright/test';

test('smoke test', async ({page}) => {
  await page.goto('http://localhost:3000/messenger');
});
