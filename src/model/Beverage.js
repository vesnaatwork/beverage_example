const ValidationError = require ('../Error.js');
 class Beverage
{
    constructor (name,type, volume, pubsub)
    {
        if (name == null){
            throw new ValidationError("Name can't be null")
        }
        else{
            this.name = name;
        }
        if (type == null){
            throw new ValidationError("Type can't be null")
        }
        else{
            this.type = type;
        }
        if (volume == null){
            throw new ValidationError("Volume can't be null")
        }
        else{
            this.volume = volume;
        }
        pubsub.publish ("200", this)
    }
    toString(){
      return `Beverage ${this.name} type ${this.type} volume ${this.volume}\n`;
    }
    
    
}
module.exports = Beverage