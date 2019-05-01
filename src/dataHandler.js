const fs = require('fs');


const DataHandler = (function(){

    function readData(){
        return fs.readFileSync('index.txt', 'utf8').split('\n');
    }

    function turnToNumbersArray(data){
        return  data[0].split(' ').map(x => parseInt(x))
    }

    function sortData(data){
        var results = {}
        results.grid = turnToNumbersArray(data.splice(0,1))
        results.location = turnToNumbersArray(data.splice(0,1))
        results.directions = data.splice(data.length-1, 1)[0]
        results.dirtPatches = data.map(x => {
          x = x.split(' ')
          return [parseInt(x[0]),parseInt(x[1])]
        })
        return results
    }

    return {
        readData : readData,
        sortData : sortData,
        turnToNumbersArray: turnToNumbersArray
    }

})();


module.exports = DataHandler