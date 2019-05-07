const rewire = require('rewire')
const dataHandlerFunctions = rewire('../src/dataHandler')

/**
 * 
 * Setting up rewire to allow me to stub fs module
 */
const fileDataDummy = '5 5\n1 2\n1 0\n2 2\n2 3\nNNESEESWNWW'

var fsMock = {
    readFileSync: function (path, encoding, cb) {
       return fileDataDummy
    }
};
dataHandlerFunctions.__set__("fs", fsMock);

// retriving functions for testing

const {sortDataTest, readDataTest, turnToNumbersArrayTest, textFileHandler} = dataHandlerFunctions

describe('DataHandler module', ()=>{

    const retrivedFileData = ['5 5','1 2','1 0','2 2','2 3','NNESEESWNWW']
    const desiredResultObject = { 
        grid: [ 5,5 ],
        location: [ 1,2 ],
        directions: 'NNESEESWNWW',
        dirtPatches: [ [ 1,0 ], [ 2,2 ], [ 2,3 ] ] 
    }

    it('#readData returns data from a file', ()=> {
        let result = readDataTest();
        expect(result).toEqual(retrivedFileData)
    })

    it('#turnToNumbersArray returns data as parsed integer array', ()=>{
        let unCleaned = ['5 5']
        let cleaned = [5,5]
        expect(turnToNumbersArrayTest(unCleaned)).toEqual(cleaned)
    })
    
    it('#sortData returns the data into a sorted result object', ()=>{
        let result = sortDataTest(retrivedFileData)
         expect(result).toEqual(desiredResultObject)
    })

 it('#DataHandler should use all of the methods to get to the answer', ()=>{
       // jasmine does not allow indivdual spies on functions - im looking into how to do this
        let result = textFileHandler.getData()
        expect(result).toEqual(desiredResultObject)
      
    })
})