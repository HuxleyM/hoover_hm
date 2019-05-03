module.exports = class Hoover {

    constructor(location_obj, floor_obj){
        this.floor = floor_obj;
        this.location = {x:location_obj['x'], y:location_obj['y']}
    }
}