const fs = require('fs');
const shortcut = require('./lib');

const vdfPath = './shortcuts.vdf';
const vdf2jsonPath = './shortcuts.json';
const json2vdfPath = './shortcuts_modified.vdf';

if(process.argv[2] === 'shortcuts.vdf'){
shortcut.parseFile(vdfPath,
    { autoConvertArrays: true, autoConvertBooleans: true, dateProperties: ['LastPlayTime'] },
    function (err, obj, inputBuffer) {
        if (err) {
            console.log('failed to read ' + filePath);
            return;
        }
        vdf_json=JSON.stringify(obj, null, 2);
        fs.writeFileSync(vdf2jsonPath, vdf_json);
});
} else if(process.argv[2] === 'shortcuts.json'){
writeBuffer = require(process.cwd() + '/' + 'shortcuts.json');
shortcut.writeFile(json2vdfPath, writeBuffer, function (err) {
    if(err){
        console.log('failed to write '+writePath);
    }
});
} else {
    console.log('Command argument with "' + process.argv[2] + '" is incorrect. ' + 'Please input "shortcuts.vdf" convert to shortcuts.json or "shortcuts.json" convert to shortcuts_modified.vdf');
}
