// const Hoover = require('../src/hoover')
// const Floor = require('../src/floor')
// const rewire = require('rewire')
// const dataHandlerFunctions = rewire('../src/dataHandler')

// const fileDataDummy = '5 5\n1 2\n1 0\n2 2\n2 3\nNNESEESWNWW'
// const retrivedFileData = ['5 5','1 2','1 0','2 2','2 3','NNESEESWNWW']


// var fsMock = {
//     readFileSync: function (path, encoding, cb) {
//        return fileDataDummy
//     }
// };
// dataHandlerFunctions.__set__("fs", fsMock);


// describe('end to end test',()=>{

//     const dummyDimensions = [4,4]
//     const dummmyDirtPatches = [[ 1, 0 ], [ 2, 2 ], [ 2, 3 ] ]

//     const floor = new Floor(dummyDimensions, dummmyDirtPatches)

//     const Henry = new Hoover([])

//     it('should return the correct location of the rover', ()=>{

//     }
//     )
// })