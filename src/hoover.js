module.exports = class Hoover {

    constructor(location_array, floor_obj){
        this.floor = floor_obj;
        this.location = {x:location_array[0], y:location_array[1]}
    }
    
    validDirections(directions){
        return directions.split('').map(x => {
            if(['n','e','s','w'.includes(x)]){
                x = x.toUpperCase();
            }
            if(!['N','E','S','W'].includes(x)){
               throw new Error('invalid directions')
            }
            return x;
        })
    }
    moveMe(directions){
        let finalDirections = this.validDirections(directions)
        finalDirections.map(x => {
           
            switch(x){
            case 'N':
                 this.location.y += 1;
                break;
            case 'E':
                this.location.x += 1;
                break;
            case 'S':
                this.location.y -= 1;
                break;
            case 'W':
                this.location.x -= 1;
                break;
            default:
                break
            }
        })
    }  
}