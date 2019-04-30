const fs = require('fs');

function readData(){
    let contents = fs.readFileSync('../index.txt', 'utf8');
    return contents;
}

module.exports = readData