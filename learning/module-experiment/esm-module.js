console.log("Before importing ES Module...");

import("fs").then(() => {
    console.log("After importing ES Module...");
});
console.log("hiiii");