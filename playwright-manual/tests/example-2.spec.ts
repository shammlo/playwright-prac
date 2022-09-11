import { test, expect } from "@playwright/test";

test.describe("DemoQA example", () => {
  const username = "Testing username";
  const email = "test@test.com";
  const address = "any address";
  const permAddress = "any permanent address";

  test.beforeEach(async ({ page }) => {
    await page.goto("https://demoqa.com/text-box");
  });
  test("Filling text inputs and submit", async ({ page }) => {
    await page.locator("#userName").type(username);
    await page.locator("#userEmail").type(email);
    await page.locator('[placeholder="Current Address"]').type(address);
    await page.locator("#permanentAddress").type(permAddress);
    await page.locator(`//button[contains(text(),"Submit")]`).click();
  });

  test("Output will show if text inputs are filled", async ({ page }) => {
    await page.locator("#userName").type("Testing username");
    await page.locator("#userEmail").type(email);
    await page.locator('[placeholder="Current Address"]').type(address);
    await page.locator("#permanentAddress").type(permAddress);

    await page.locator(`//button[contains(text(),"Submit")]`).click();
    const output = page.locator('//div[@id="output"]//div[contains(@class,"border")]');
    await page.pause();
    await expect(output).toBeVisible();
    await expect(output).toContainText("Name:" + username);
    await expect(output).toContainText("Email:" + email);
    await expect(output).toContainText("Address :" + address);
    await expect(output).toContainText("Permananet Address :" + permAddress);
  });
});
