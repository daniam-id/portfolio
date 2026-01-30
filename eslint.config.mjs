import { defineConfig, globalIgnores } from "eslint/config";
import astro from "eslint-plugin-astro";
import ts from "typescript-eslint";

const eslintConfig = defineConfig([
  // Astro recommended config
  astro.configs.recommended,
  // TypeScript config
  ...ts.configs.recommended,
  // Global ignores
  globalIgnores([
    "dist/**",
    ".astro/**",
    "node_modules/**",
  ]),
]);

export default eslintConfig;
