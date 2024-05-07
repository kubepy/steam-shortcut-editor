const fs = require('fs');
const shortcut = require('./lib');

const filePath = './shortcuts.json';
const writePath = './shortcuts_modified.vdf';

writeBuffer = fs.readFileSync(filePath); 

shortcut.writeFile(writePath, writeBuffer, function (err) {
    if(err){
        console.log('failed to write '+writePath);
    }
});
