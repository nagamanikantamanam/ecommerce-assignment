import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },  // Apply ESLint to JS/TS files
  { files: ["**/*.js"], languageOptions: { sourceType: "module" } }, // Treat JS files as CommonJS
 // { languageOptions: { globals: globals.browser } },  // Add browser global variables
  pluginJs.configs.recommended,  // Apply recommended JS rules
  ...tseslint.configs.recommended // Apply recommended TypeScript rules
];
