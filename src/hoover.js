module.exports = class Hoover {

    constructor(location_array, floor_obj){
        this.floor = floor_obj;
        this.location = {x:location_array[0], y:location_array[1]}
    }
    
    validDirections(directions){
        directions.split('').map(x => {
            if(!['N','E','S','W'].includes(x)){
                throw new Error('invalid directions')
            }
        })
    }
    moveMe(directions){
        this.validDirections(directions)
     
            switch(directions){
                case 'N':
                  return 'N'
                  break;
                case 'E':
                  return 'E'
                  break;
                case 'S':
                  return 'S'
                  break;
                case 'W':
                  return 'W'
                  break;
                default:
                  break
            }
   
    }  
}