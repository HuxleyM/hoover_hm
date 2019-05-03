const Hoover = require('../src/hoover')

describe('hoover class', ()=>{
    
    const dummyFloorObj =  {
        dimensions: { x: 4, y: 4 },
        dirtPatches: [ [ 1, 0 ], [ 2, 2 ], [ 2, 3 ] ] 
    }


    const dummyLocation = [ 5, 5 ]
    const dummyDirections = 'NNESEESWNWW'
    const Henry = new Hoover(dummyLocation, dummyFloorObj)

    it('takes location_obj and a floor_obj on construction',()=>{
       expect(Henry.location).toEqual({x:5, y:5})
       expect(Henry.floor).toEqual(dummyFloorObj)
    })

    it('#moveme should take an argument, and should return a different result dependent on letter',()=>{
        expect(Henry.moveMe('N')).toEqual('N')
        expect(Henry.moveMe('E')).toEqual('E')
        expect(Henry.moveMe('S')).toEqual('S')
        expect(Henry.moveMe('W')).toEqual('W')
     })

     it('#validDirections should check that directions only contain valid Directions', ()=> {
         expect(()=>Henry.moveMe('1')).toThrow(new TypeError('invalid directions'))
     })

    it('#moveme should take an argument, and should return a different result dependent on letter',()=>{
        expect(Henry.moveMe('N')).toEqual('N')
        expect(Henry.moveMe('E')).toEqual('E')
        expect(Henry.moveMe('S')).toEqual('S')
        expect(Henry.moveMe('W')).toEqual('W')
     })



})

