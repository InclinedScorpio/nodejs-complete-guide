const fs = require("fs");

/**
 * write text in a file in sync
 * writeFileSync will not append
 */
// fs.writeFileSync("notes.txt", "My name is Ashutosh Tiwari")

fs.appendFileSync("notes.txt", "\n I live in India");

// const validator = require("validator")
// const getNodes = require("./notes");
const chalk = require("chalk");
// const msg = getNodes();

// console.log(validator.isEmail("ashu@infosys.com"));
// console.log(validator.isURL("http://inclined.com"))

console.log(chalk.whiteBright.bgBlack("hey this is 12 errror due to line 9 on app.js inside note file"))
