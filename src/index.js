const { textFileHandler } = require('./dataHandler')
const Grid = require('./floor')
const Hoover = require('./hoover')



const CleanedData = textFileHandler.getData();
const Floor = new Grid(CleanedData.grid, CleanedData.dirtPatches)
const Henry = new Hoover(CleanedData.location, Floor)
Henry.moveMe(CleanedData.directions)
console.log(Henry.givesLocation)
return Henry.givesLocation
