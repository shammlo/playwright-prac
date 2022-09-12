import { test, expect } from "@playwright/test";

test.describe.skip("Download a file", () => {
  test("Download a text file", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/download");

    const [download] = await Promise.all([
      // Start waiting for the download
      page.waitForEvent("download"),
      // Perform the action that initiates download
      page.locator('//a[@href="download/TextDoc.txt"]').click(),
    ]);
    // Wait for the download process to complete
    console.log(await download.path());
    const path = await download.path();
    console.log(path);

    // Save downloaded file somewhere
    await download.saveAs(path);
  });
});
