import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e",
  use: {
    baseURL: "http://localhost:3001",
  },
  projects: [
    {
      name: "mobile",
      use: { viewport: { width: 360, height: 800 } },
    },
    {
      name: "tablet",
      use: { viewport: { width: 768, height: 1024 } },
    },
    {
      name: "desktop",
      use: { viewport: { width: 1440, height: 900 } },
    },
  ],
  webServer: {
    command: "npm run build && npm run serve:out",
    url: "http://localhost:3001",
    reuseExistingServer: true,
    timeout: 180000,
  },
});
