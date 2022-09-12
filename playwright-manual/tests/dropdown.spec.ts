import { test, expect, Locator } from "@playwright/test";

test.describe("Dropdown", () => {
  let dropdown: Locator;
  // test.setTimeout(10000);

  test.beforeEach(async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/dropdown");
    dropdown = page.locator("#dropdown");
  });
  test("Can chose a dropdown option by value tag", async ({ page }) => {
    await dropdown.selectOption("2");
    await expect(dropdown).toHaveValue("2");
  });

  test("Can chose a dropdown option by label tag", async ({ page }) => {
    await dropdown.selectOption({
      label: "Option 1",
    });
    await expect(dropdown).toHaveValue("1");
  });
});
