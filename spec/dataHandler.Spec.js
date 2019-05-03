const rewire = require('rewire')
const dataHandlerFunctions = rewire('../src/dataHandler')


const fileDataDummy = '5 5\n1 2\n1 0\n2 2\n2 3\nNNESEESWNWW'
const retrivedFileData = ['5 5','1 2','1 0','2 2','2 3','NNESEESWNWW']


var fsMock = {
    readFileSync: function (path, encoding, cb) {
       return fileDataDummy
    }
};
dataHandlerFunctions.__set__("fs", fsMock);

const {sortDataTest, readDataTest, turnToNumbersArrayTest, textFileHandler} = dataHandlerFunctions

describe('DataHandler module', ()=>{

    it('#readData returns data from a file', ()=> {
        let result = readDataTest();
        expect(result).toEqual(retrivedFileData)
    })

    it('#turnTonumbers returns data as parsed integer array', ()=>{
        let unCleaned = ['5 5']
        let cleaned = [5,5]
        expect(turnToNumbersArrayTest(unCleaned)).toEqual(cleaned)
    })

    xit('#sortData returns the data into a sorted result object', ()=>{
        let result = sortDataTest(retrivedFileData)
        expect(result.grid).toEqual([5, 5])
        expect(result.location).toEqual([1, 2])
        expect(result.directions).toEqual('NNESEESWNWW')
        expect(result.dirtPatches).toEqual([ [1, 0], [2, 2], [2, 3] ])
    })

    it('#DataHandler will use all of the methods to get to the answer', ()=>{
        let result = textFileHandler.getData()
        expect(result.grid).toEqual([5, 5])
        expect(result.location).toEqual([1, 2])
        expect(result.directions).toEqual('NNESEESWNWW')
        expect(result.dirtPatches).toEqual([ [1, 0], [2, 2], [2, 3] ])
    })
})