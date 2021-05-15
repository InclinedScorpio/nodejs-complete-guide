const fs = require("fs");

/**
 * write text in a file in sync
 * writeFileSync will not append
 */
// fs.writeFileSync("notes.txt", "My name is Ashutosh Tiwari")

fs.appendFileSync("notes.txt", "\n I live in India");