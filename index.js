const { textFileHandler } = require('./src/dataHandler')
const Grid = require('./src/floor')
const Hoover = require('./src/hoover')

const program = (function(){
    let cleanedData = textFileHandler.getData();
    let floor = new Grid(cleanedData.grid, cleanedData.dirtPatches)
    let Henry = new Hoover(cleanedData.location, floor)
    Henry.moveMe(cleanedData.directions)
    console.log(Henry.givesLocation)
})();