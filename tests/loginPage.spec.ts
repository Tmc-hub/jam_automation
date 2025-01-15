import test, { expect } from "@playwright/test"

test.describe("Testing Jam-board", () => {
    test.beforeEach(async ({ page }) =>{
        await page.goto("https://jam.up.railway.app/login")
    })
    test("login page", async ({page}) => {
        const title = page.getByText("Login to your Account")
        await expect(title).toBeVisible()
    })
})