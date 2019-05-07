const Floor = require('../src/floor')

describe('grid',()=>{
    
    const dummyDimensions = [4,4]
    const dummmyDirtPatches = [[ 1, 0 ], [ 2, 2 ], [ 2, 3 ] ]
    const floor = new Floor(dummyDimensions, dummmyDirtPatches)

    it('takes a dimensions and dirt patches on construction',()=>{
        expect(floor.dimensions).toEqual({ x : dummyDimensions[0], y : dummyDimensions[1]})
        expect(floor.dirtPatches).toEqual(dummmyDirtPatches)
    })
})