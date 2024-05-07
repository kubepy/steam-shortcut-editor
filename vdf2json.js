const fs = require('fs');
const config = {
    steamUserId: process.env.STEAM_USER_ID,
    steamDirectory: process.env.STEAM_DIRECTORY || '/home/deck/.local/share/Steam'
};
const shortcut = require('./lib');

const filePath = config.steamDirectory + '/userdata/' + config.steamUserId + '/config/shortcuts.vdf';
const writePath = './shortcuts.vdf';

shortcut.parseFile(filePath,
    { autoConvertArrays: true, autoConvertBooleans: true, dateProperties: ['LastPlayTime'] },

    function (err, obj, inputBuffer) {

        if (err) {
            console.log('failed to read ' + filePath);
            return;
        }

        //Parsed Object
        console.log(JSON.stringify(obj, null, 2));

        shortcut.writeFile(writePath, obj, function (err) {
            if(err){
                console.log('failed to write '+writePath);
            }
        });

    });
