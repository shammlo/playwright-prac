import { test, expect } from "@playwright/test";

test.describe("Iframe's", () => {
  test("Locate and write something inside the iframe", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/iframe");

    const frame = page.frameLocator("#mce_0_ifr").locator("html");
    await frame.click();
    await frame.type("Hi this this working!");
    await page.pause();
  });
});
