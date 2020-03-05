 class Beverage
{
    constructor(name,type, temperature)
    {
        this.name=name;
        this.type=type;
        this.temperature=temperature;

    }
     
    getName(){
        return this.name;
    }
    getType(){
        return this.type;
    }
    getTemperature(){
        return this.temperature;
    }
    setTemperature(t){
        this.temperature-=t;
    }
    
}
module.exports = Beverage