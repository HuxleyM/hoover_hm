const fs = require('fs');


const DataHandler = (function(){

    function readData(){
        return fs.readFileSync('../index.txt', 'utf8');
    }

    function sortData(data){
        var results = {}
        results.grid = data.splice(0,1).split('')
        results.locations = data.splice(0,1).split('')
        results.directions = data.splice(array.length-1, 1)
        results.dirt = data
        return results
    }

    return {
        readData : readData,
        sortData : sortData,
    }

})


module.exports = DataHandler