const fs = require("fs");

console.log("Starting file read...");
const data = fs.readFileSync("largeFile.txt", "utf8");
console.log("Finished reading file.");
console.log(data.substring(0, 100)); // Print first 100 characters
