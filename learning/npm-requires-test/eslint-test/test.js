console.log(window);  // ✅ Should work in browser mode
console.log(document); // ✅ Should work in browser mode

const fs = require("fs");  // ✅ Should work due to CommonJS setting
