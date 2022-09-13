import { test, expect } from "@playwright/test";

test.describe.skip("Login", () => {
  test.use({
    storageState: "auth.json",
  });

  test.beforeEach(async ({ page }) => {
    await page.goto("https://parabank.parasoft.com/parabank/index.htm");
  });

  test.skip("saving session", async ({ page, context }) => {
    // Go to https://parabank.parasoft.com/parabank/index.htm
    // Click text=Register
    await page.locator("text=Register").click();

    // Click input[name="customer\.firstName"]
    await page.locator('input[name="customer\\.firstName"]').click();
    // Fill input[name="customer\.firstName"]
    await page.locator('input[name="customer\\.firstName"]').fill("testing");
    // Press Tab
    await page.locator('input[name="customer\\.firstName"]').press("Tab");
    // Fill input[name="customer\.lastName"]
    await page.locator('input[name="customer\\.lastName"]').fill("test");
    // Press Tab
    await page.locator('input[name="customer\\.lastName"]').press("Tab");
    // Fill input[name="customer\.address\.street"]
    await page.locator('input[name="customer\\.address\\.street"]').fill("test");
    // Press Tab
    await page.locator('input[name="customer\\.address\\.street"]').press("Tab");
    // Fill input[name="customer\.address\.city"]
    await page.locator('input[name="customer\\.address\\.city"]').fill("test");
    // Press Tab
    await page.locator('input[name="customer\\.address\\.city"]').press("Tab");
    // Fill input[name="customer\.address\.state"]
    await page.locator('input[name="customer\\.address\\.state"]').fill("test");
    // Press Tab
    await page.locator('input[name="customer\\.address\\.state"]').press("Tab");
    // Fill input[name="customer\.address\.zipCode"]
    await page.locator('input[name="customer\\.address\\.zipCode"]').fill("04001");
    // Press Tab
    await page.locator('input[name="customer\\.address\\.zipCode"]').press("Tab");
    // Fill input[name="customer\.phoneNumber"]
    await page.locator('input[name="customer\\.phoneNumber"]').fill("3429384234");
    // Press Tab
    await page.locator('input[name="customer\\.phoneNumber"]').press("Tab");
    // Fill input[name="customer\.ssn"]
    await page.locator('input[name="customer\\.ssn"]').fill("test");
    // Press Tab
    await page.locator('input[name="customer\\.ssn"]').press("Tab");
    // Fill input[name="customer\.username"]
    await page.locator('input[name="customer\\.username"]').fill("test1212");
    // Press Tab
    await page.locator('input[name="customer\\.username"]').press("Tab");
    // Fill input[name="customer\.password"]
    await page.locator('input[name="customer\\.password"]').fill("test1212");
    // Press Tab
    await page.locator('input[name="customer\\.password"]').press("Tab");
    // Fill input[name="repeatedPassword"]
    await page.locator('input[name="repeatedPassword"]').fill("test1212");
    // Click input:has-text("Register")
    await page.locator('input:has-text("Register")').click();
    await context.storageState({ path: "auth-login.json" });
  });

  test("checking", async ({ page }) => {
    await page.locator("#leftPanel >> text=Bill Pay").click();
    await page.pause();
  });

  test("checking 2", async ({ page }) => {
    await page.locator("text=Transfer Funds").first().click();
  });
});
