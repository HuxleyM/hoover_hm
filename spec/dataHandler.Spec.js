const rewire = require('rewire')
const DataHandler = rewire('../src/dataHandler')

var dummyData = '5 5 \n 1 2 \n 1 0 \n 2 2 \n 2 3 \n NNESEESWNWW';

var fsMock = {
    readFileSync: function (path, encoding) {
      return dummyData
    }
 };

 DataHandler.__set__("fs", fsMock);

describe('DataHandler module', ()=>{

    it('#readData returns data from a file', ()=> {
        let result = DataHandler.readData();
        expect(result).toEqual(dummyData)
    })

    it('#sortData will split up an array into relavant sections', ()=>{
       expect(typeof sortData(result)).toEqual('array')
    })


})

