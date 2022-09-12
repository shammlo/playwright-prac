import { devices, PlaywrightTestConfig } from "@playwright/test";
const config: PlaywrightTestConfig = {
  use: {
    baseURL: "https://playwright.dev",
    headless: true,
    trace: "on-first-retry",
  },

  projects: [
    {
      name: "chrome",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],
  // workers: 5,
  fullyParallel: true,
  retries: 0,
};
export default config;
