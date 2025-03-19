const esbuild = require("esbuild");
const { execSync } = require("child_process");

// First, run TypeScript type checking
console.log("🔍 Running TypeScript type check...");
execSync("npx tsc --noEmit", { stdio: "inherit" });

console.log("🚀 Bundling with esbuild...");
esbuild.build({
  entryPoints: ["src/app.ts"],  // Entry TypeScript file
  outfile: "dist/bundle.js",    // Output JavaScript file
  bundle: true,                 // Bundle dependencies
  platform: "node",             // Target Node.js environment
  target: "node16",             // Use modern Node.js features
  minify: false,                // Set true for minified output
  sourcemap: true,              // Generates source maps
  format: "cjs",                // CommonJS format (use "esm" for ES modules)
  logLevel: "info",             // Show build logs
  external: []                  // Keep dependencies bundled
}).catch(() => process.exit(1));
