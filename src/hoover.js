module.exports = class Hoover {

    constructor(location_array, floor_obj){
        this.floor = floor_obj;
        this.location = {x:location_array[0], y:location_array[1]}
    }

    get givesLocation(){
        return `${this.location.x.toString()} ${this.location.y.toString()}`
    }
    
    validDirections(directions){
        return directions.split('').map(x => {
            x = x.toUpperCase();
            if(!['N','E','S','W'].includes(x)){
               throw new Error('invalid directions')
            }
            return x;
        })
    }

    inbounds(axis, move){
        let onAxis = (axis === 'x') ? this.floor.dimensions.x : this.floor.dimensions.y;
        let futureMove = this.location[axis] + move;
        if (futureMove > onAxis || futureMove < 0){
            throw new Error('out of bounds')
         } 
         else { 
             return true;
         }
     }

    moveMe(directions){
        let finalDirections = this.validDirections(directions)
        finalDirections.map(x => {  
            switch(x){
            case 'N':
                 if(this.inbounds('x',1)) this.location.y += 1;
                break;
            case 'E':
                if(this.inbounds('y',1)) this.location.x += 1;
                break;
            case 'S':
                if(this.inbounds('x',-1)) this.location.y -= 1;
                break;
            case 'W':
                if(this.inbounds('y',-1)) this.location.x -= 1;
                break;
            default:
                break
            }
        })
    }  
}