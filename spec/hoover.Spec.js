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
    
    xit('#moveme should take an argument, and should return a integer result dependent on letter',()=>{
        expect(Henry.moveMe('N')).toEqual(1)
        expect(Henry.moveMe('E')).toEqual(1)
        expect(Henry.moveMe('S')).toEqual(-1)
        expect(Henry.moveMe('W')).toEqual(-1)
     })

 
     it('#validDirections should check that directions only contain valid Directions', ()=> {
         expect(()=>Henry.validDirections('1')).toThrow(new TypeError('invalid directions'))
     })
     
     it('#validDirections should be able to regonise lower case letters',()=>{
        let directions = Henry.validDirections('n')
        expect(directions).toEqual(['N'])  
     })

     xit('#moveme should be able to take a string of directions', ()=>{
         expect(Henry.moveMe('NESW')).toEqual(-1)
     })

    it('#moveme should be able to take a string of directions', ()=>{
        expect(Henry.moveMe('N')).toEqual(1)
        expect(Henry.moveMe('E')).toEqual(1)
        expect(Henry.moveMe('S')).toEqual(-1)
        expect(Henry.moveMe('W')).toEqual(-1)
    })

 


})

