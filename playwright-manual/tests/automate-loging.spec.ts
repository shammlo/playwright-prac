import { test, expect } from "@playwright/test";
test.describe("Login", () => {
  test.use({
    storageState: "auth-login.json",
  });

  test.beforeEach(async ({ page }) => {
    await page.goto("https://parabank.parasoft.com/parabank/index.htm");
  });

  test.skip("saving session", async ({ page, context }) => {
    // Go to https://parabank.parasoft.com/parabank/index.htm
    // Click input[name="username"]
    await page.locator('input[name="username"]').click();
    // Fill input[name="username"]
    await page.locator('input[name="username"]').fill("testing123");
    // Click input[name="password"]
    await page.locator('input[name="password"]').click();
    // Fill input[name="password"]
    await page.locator('input[name="password"]').fill("test123");
    // Click text=Log In
    await page.locator("text=Log In").click();

    await context.storageState({ path: "auth-login.json" });

    await expect(page).toHaveURL("https://parabank.parasoft.com/parabank/overview.htm");
  });
  test("checking", async ({ page }) => {
    await page.locator("#leftPanel >> text=Bill Pay").click();
  });
  test("checking 2", async ({ page }) => {
    await page.locator("text=Transfer Funds").first().click();
  });
});
