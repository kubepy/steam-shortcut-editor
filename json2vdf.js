const fs = require('fs');
const shortcut = require('./lib');

const writePath = './shortcuts_modified.vdf';

writeBuffer = require(process.cwd() + '/' + 'shortcuts.json');
shortcut.writeFile(writePath, writeBuffer, function (err) {
    if(err){
        console.log('failed to write '+writePath);
    }
});
