const fs = require('fs');
const shortcut = require('./lib');

const filePath = './shortcuts.vdf';
const WritePath = './shortcuts.json';

shortcut.parseFile(filePath,
    { autoConvertArrays: true, autoConvertBooleans: true, dateProperties: ['LastPlayTime'] },

    function (err, obj, inputBuffer) {

        if (err) {
            console.log('failed to read ' + filePath);
            return;
        }

        vdf_json=JSON.stringify(obj, null, 2);
        console.log(vdf_json);
        fs.writeFileSync(WritePath, vdf_json);
});
