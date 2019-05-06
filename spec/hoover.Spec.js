const Hoover = require('../src/hoover')

describe('hoover class', ()=>{
    
    const dummyFloorObj =  {
        dimensions: { x: 4, y: 4 },
        dirtPatches: [ [ 1, 0 ], [ 2, 2 ], [ 2, 3 ] ] 
    }


    const dummyLocation = [ 5, 5 ]
    const dummyDirections = 'NNESEESWNWW'
    var henry;
    
    beforeEach(()=>{
     henry = new Hoover(dummyLocation, dummyFloorObj)
    })

    it('takes location_obj and a floor_obj on construction',()=>{
       expect(henry.location).toEqual({x:5, y:5})
       expect(henry.floor).toEqual(dummyFloorObj)
    })
    
    
    xit('#moveme should take an argument, and should return a integer result dependent on letter',()=>{
        expect(henry.moveMe('N')).toEqual(1)
        expect(henry.moveMe('E')).toEqual(1)
        expect(henry.moveMe('S')).toEqual(-1)
        expect(henry.moveMe('W')).toEqual(-1)
     })

 
     it('#validDirections should check that directions only contain valid Directions', ()=> {
         expect(()=>henry.validDirections('1')).toThrow(new TypeError('invalid directions'))
     })
     
     it('#validDirections should be able to regonise lower case letters',()=>{
        let directions = henry.validDirections('n')
        expect(directions).toEqual(['N'])  
     })


    it('#moveme should be able to take a string of directions that change its x and y location', ()=>{
        henry.moveMe('SW')
        expect(henry.location).toEqual({x:4, y:4})
   
    })

    it('#inbounds should return true if a suggested move is within bounds ',()=>{
        let truthfulCase = henry.inbounds('x',-2)
        expect(truthfulCase).toBe(true)
    })


    it('#inbounds should return an error if a move is out of bounds' ,()=>{
        expect(()=>henry.inbounds('x',1)).toThrow(new Error('out of bounds'))
    })


    it('#moveMe should call the inbounds method', ()=>{
       spyOn(henry, 'inbounds')
       henry.moveMe('NES')
       expect(henry.inbounds).toHaveBeenCalled();
    })

    it('#givesLocation should return the current x an y coordinate of the hoover', ()=>{
        expect(henry.givesLocation).toEqual('5 5')
    })
})