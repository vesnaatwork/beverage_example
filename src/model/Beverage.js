const ValidationError = require ('../Error.js');
const MyDate = require ('../util/MyDate');
 class Beverage
{
    constructor (name,type, volume, pubsub)
    {
        const mydate = new MyDate();
        this.date_created = mydate.toString()
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
        pubsub.publish ("200", this);
        pubsub.subscribe("beveragecreated",this.constructor.bind(this));
    }
   
    toString(){
      return JSON.stringify(this);
    }
    
    
}
module.exports = Beverage