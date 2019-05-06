module.exports = class Hoover {

    constructor(location_array, floor_obj){
        this.floor = floor_obj;
        this.location = {x:location_array[0], y:location_array[1]}
        this.dirtPatchesHoovered = 0
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

    hooversUp(){
        this.floor.dirtPatches.map((x, index) => {
          if(x[0] === this.location.x && x[1] === this.location.y){
            this.floor.dirtPatches.splice(index, 1)
            this.dirtPatchesHoovered += 1
          }
        })
    }

    inbounds(axis, move){
        let onAxis = (axis === 'x') ? this.floor.dimensions.x : this.floor.dimensions.y;
        if (this.location[axis] + move > onAxis || this.location[axis] + move < 0){
            throw new Error('out of bounds')
        }
        return true;
     }

    moveMe(directions){
        let finalDirections = this.validDirections(directions)
        finalDirections.map(x => {  
            switch(x){
            case 'N':
                 if(this.inbounds('y',1)) this.location.y += 1;
                break;
            case 'E':
                if(this.inbounds('x',1)) this.location.x += 1;
                break;
            case 'S':
                if(this.inbounds('y',-1)) this.location.y -= 1;
                break;
            case 'W':
                if(this.inbounds('x',-1)) this.location.x -= 1;
                break;
            default:
                break
            }
        })
    }  
}