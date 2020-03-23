
class Glass
{
    constructor( maxvolume, name)
    {   
        if (maxvolume == null)
        throw "400"
        if (name==null)
        throw "400"
        this.maxvolume=maxvolume
        this.name=name;
        this.volume=0;
    }
  
    fill(beverage){
       if(this.volume+beverage.volume>this.maxvolume)
       throw "400"
        this.volume+=beverage.volume;
        this.beverage=beverage
    }

    spill(beverage){
        if (this.volume-beverage.volume<0)
            throw "400"
        this.volume-=beverage.volume;  
    }

}
module.exports = Glass;