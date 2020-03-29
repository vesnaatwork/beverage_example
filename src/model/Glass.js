
class Glass
{
    constructor( maxvolume, name, pubsub)
    {   
        if (maxvolume == null){
            throw new ValidationError ("Glass maximum volume can't be null")
        }
        if (name == null)
        {
            throw new ValidationError ("Glass name can't be null")
        }
        this.maxvolume = maxvolume
        this.name = name;
        this.volume = 0;
        pubsub.publish("glass", {name:this.name, maxvolume:this.maxvolume})
    }
    fill(beverage,pubsub){
       if(this.volume+beverage.volume>this.maxvolume){
        new ValidationError (str.concat ("Volume can't be larger than ",this.maxvolume))
       }
        this.volume += beverage.volume;
        this.beverage = beverage
        pubsub.publish("fill", {name:this.name, volume:this.volume, beverage:this.beverage.name})
    }

    spill(beverage,pubsub){
        if (this.volume-beverage.volume<0)
        new ValidationError (str.concat("Volume can't be less than ",this.volume))
        this.volume -= beverage.volume;  
        pubsub.publish("spill", {name:this.name, volume:this.volume, beverage:this.beverage.name})
    }
        
   }


module.exports = Glass;