import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] }, // 1️⃣ Match all JS/TS files
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } }, // 2️⃣ Use CommonJS for .js files
  { languageOptions: { globals: globals.browser } }, // 3️⃣ Use browser globals
  pluginJs.configs.recommended, // 4️⃣ Apply recommended JavaScript rules
  ...tseslint.configs.recommended, // 5️⃣ Apply recommended TypeScript rules
];
