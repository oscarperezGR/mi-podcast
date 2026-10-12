import { test, expect } from "@playwright/test";

test("site is served statically", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Mi Podcast/i);
});
