const rewire = require('rewire')
const DataHandler = rewire('../src/dataHandler')

const {sortData, readData, cleanData, turnToNumbersArray} = require('../src/dataHandler')

var dummyData = [ '5 5', '1 2', '1 0', '2 2', '2 3', 'NNESEESWNWW' ]

var fsMock = {
    readFileSync: function (path, encoding) {
      return dummyData
    }
 };

 DataHandler.__set__("fs", fsMock);

describe('DataHandler module', ()=>{

    xit('#readData returns data from a file', ()=> {
        let result = DataHandler.readData();
        expect(result).toEqual(dummyData)
    })

    xit('#sortData will split up an array into relavant sections', ()=>{
       expect(typeof sortData(result)).toEqual('array')
    })
    
    var data;
    beforeEach(()=>{
       data = readData()
    })
    it('#readData returns a list of data',()=>{
        expect(data).toEqual(dummyData)
    })


    it('#sortData returns the data into a sorted result object', ()=>{
        let result = sortData(data)
        console.log(result)
        expect(result.grid).toEqual([5, 5])
        expect(result.location).toEqual([1, 2])
        expect(result.directions).toEqual('NNESEESWNWW')
        expect(result.dirtPatches).toEqual([ [1, 0], [2, 2], [2, 3] ])
    })

    it('#turnTonumbers returns data as parsed integer array', ()=>{
        let unCleaned = ['5 5']
        let cleaned = [5,5]
        console.log(turnToNumbersArray(unCleaned))
        expect(turnToNumbersArray(unCleaned)).toEqual(cleaned)

    })


})

