import { test, expect } from "@playwright/test";

test.describe("Hover on an element", () => {
  test("Show username based on the element that is hovered", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/hovers");
    const user1 = page.locator("h5", {
      hasText: "name: user1",
    });
    const user3 = page.locator("h5", {
      hasText: "name: user3",
    });
    await page.locator('//div[@class="figure2"]').first().hover();

    await expect(user1).toBeVisible();

    await page.locator('//div[@class="figure"][3]').hover();

    await expect(user3).toBeVisible();

    await page.pause();
  });
});
