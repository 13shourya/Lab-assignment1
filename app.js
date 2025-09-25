// Import the file system module
console.log(" Script started");

const fs = require('fs');

// Use fs.readFile (non-blocking) to read paragraph.txt
fs.readFile('paragraph.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log("File contents:\n");
    console.log(data);
});
