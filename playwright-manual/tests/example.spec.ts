import { test, expect } from "@playwright/test";

const url = "https://playwright.dev/";

test.describe("Playwright", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("First test", async ({ page }) => {
    const text = page.locator("span", { hasText: "Playwright" });

    await expect(text).toHaveText("Playwright");
  });

  test("Go to Docs page", async ({ page }) => {
    await page
      .locator("a", {
        hasText: "Get started",
      })
      .click();

    await page
      .locator(`//a[contains(@class,"navbar__item navbar__link") and contains(text(),'API')]`)
      .click();
  });
});
