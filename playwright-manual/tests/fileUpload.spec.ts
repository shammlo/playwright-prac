import { test, expect } from "@playwright/test";

test.describe("File upload", () => {
  test("Successfully upload a file", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/upload");

    const fileName = "text.txt";

    await page.locator('//input[@id="file-upload"]').setInputFiles(fileName);

    await page.locator('//input[@id="file-submit"]').click();

    await page.pause();
    await expect(page.locator('//div[@id="uploaded-files"]')).toHaveText(fileName);
  });
});
