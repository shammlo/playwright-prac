import { test, expect } from "@playwright/test";

test.describe("Drag and drop", () => {
  test("Can drag element from position A to B", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/drag_and_drop");
    await page.dragAndDrop("#column-a", "#column-b");
    await page.pause();
  });
});
