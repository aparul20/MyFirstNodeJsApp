const fs = require('fs');
fs.writeFileSync('AutoCreated.txt', 'This is created by Nodejs');
fs.appendFileSync('AutoCreated.txt', 'Appending Second Line');
console.log('File creation complete');