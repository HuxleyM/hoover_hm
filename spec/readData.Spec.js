const rewire = require('rewire')
const readData = rewire('../src/readData')

var dummyData = '5 5 \n 1 2 \n 1 0 \n 2 2 \n 2 3 \n NNESEESWNWW';

var fsMock = {
    readFileSync: function (path, encoding) {
      return dummyData
    }
 };

readData.__set__("fs", fsMock);

describe('fetchData', ()=>{

    it('returns data from a file', ()=> {
        let result = readData();
        expect(result).toEqual(dummyData)
    })


})