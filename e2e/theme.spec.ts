import { expect, test } from "@playwright/test";

test("initial load respects stored dark preference", async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem("theme", "dark");
  });

  await page.goto("/");
  await expect(page.locator("html")).toHaveClass(/dark/);
});

test("initial load respects stored light preference", async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem("theme", "light");
  });

  await page.goto("/");
  await expect(page.locator("html")).not.toHaveClass(/dark/);
});

test.describe("invalid stored value fallback", () => {
  test.use({ colorScheme: "dark" });

  test("falls back to system preference when storage value is invalid", async ({ page }) => {
    await page.addInitScript(() => {
      localStorage.setItem("theme", "not-valid");
    });

    await page.goto("/");
    await expect(page.locator("html")).toHaveClass(/dark/);
  });

  test("keeps following system changes when storage value is invalid", async ({ page }) => {
    await page.addInitScript(() => {
      localStorage.setItem("theme", "not-valid");
    });

    await page.goto("/");
    await expect(page.locator("html")).toHaveClass(/dark/);

    await page.emulateMedia({ colorScheme: "light" });
    await expect(page.locator("html")).not.toHaveClass(/dark/);
  });
});

test("toggle updates class and aria state", async ({ page }) => {
  await page.goto("/");

  const toggle = page.getByRole("button", { name: /toggle dark mode/i });
  await expect(toggle).toHaveAttribute("aria-pressed", "false");

  await toggle.click();
  await expect(page.locator("html")).toHaveClass(/dark/);
  await expect(toggle).toHaveAttribute("aria-pressed", "true");

  await toggle.click();
  await expect(page.locator("html")).not.toHaveClass(/dark/);
  await expect(toggle).toHaveAttribute("aria-pressed", "false");
});

test("explicit user toggle remains sticky when storage write fails", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "dark" });

  await page.addInitScript(() => {
    localStorage.removeItem("theme");
    localStorage.setItem = () => {
      throw new Error("blocked storage");
    };
  });

  await page.goto("/");
  const toggle = page.getByRole("button", { name: /toggle dark mode/i });

  await expect(page.locator("html")).toHaveClass(/dark/);

  await toggle.click();
  await expect(page.locator("html")).not.toHaveClass(/dark/);

  await page.emulateMedia({ colorScheme: "light" });
  await page.emulateMedia({ colorScheme: "dark" });
  await expect(page.locator("html")).not.toHaveClass(/dark/);
});

test("theme transition class is cleaned up", async ({ page }) => {
  await page.goto("/");
  const toggle = page.getByRole("button", { name: /toggle dark mode/i });

  await toggle.click();
  await expect(page.locator("html")).toHaveClass(/theme-transition/);

  await expect(page.locator("html")).not.toHaveClass(/theme-transition/);
});
