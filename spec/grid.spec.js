const Floor = require('../src/floor')

describe('grid',()=>{
    
    const dummyDimensions = [4,4]
    const dummmyDirtPatches = [[ 1, 0 ], [ 2, 2 ], [ 2, 3 ] ]

    it('takes a dimensions and dirt patches on construction',()=>{
        var floor = new Floor(dummyDimensions, dummmyDirtPatches)
        expect(floor.dimensions).toEqual({ x : dummyDimensions[0], y : dummyDimensions[1]})
        expect(floor.dirtPatches).toEqual(dummmyDirtPatches)
    })
})