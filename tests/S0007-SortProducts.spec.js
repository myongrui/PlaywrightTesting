const { test, expect } = require("@playwright/test");

test("Check Product", async ({ page }) => {
  await page.goto("https://shopee.sg/");
  await page.locator("shopee-banner-popup-stateful svg").click();
  await page.getByPlaceholder("Register now & get $10 off voucher!").click();
  await page
    .getByPlaceholder("Register now & get $10 off voucher!")
    .fill("pants");
  await page
    .getByPlaceholder("Register now & get $10 off voucher!")
    .press("Enter");
  await expect(page).toHaveURL("https://shopee.sg/search?keyword=pants");
  await page.getByText("Latest").click();
  await expect(page).toHaveURL(
    "https://shopee.sg/search?keyword=pants&page=0&sortBy=ctime"
  );
});
