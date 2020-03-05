
class Glass
{
    constructor( maxvolume, name)
    {   
        if (maxvolume == null)

        console.log("this is required");
            else{
                this.maxvolume=maxvolume
            }
        this.name=name;
        this.volume=0;

    }
    setBeverage(beverage){
        this.beverage=beverage;
    }
    getMaxVolume(){
        return this.maxvolume;
    }
    getVolume(){
        return this.volume;
    }
    getName(){
        return this.name;
    }
    getBeverage(){
        return this.beverage;
    }
    setVolume(volume,operation){
        if (operation=='pour' && this.volume+volume<this.maxvolume) 
            this.volume+=volume;
        else 
        if (operation=='spill' ){
        this.volume-=volume;
        if (this.volume<0)
        this.volume=0;
        }
        else {
            console.log(operation);
            console.log("Wrong operation");
        }
    }   
    setBeverage(beverage){
        this.beverage=beverage;
    }
   fill(beverage,volume){
    if (this.getMaxVolume()>volume){
        this.setVolume(volume,'pour');
        }
    else {
        console.log("you can only pour "+this.getVolume())
        this.setVolume(glass.getMaxVolume(),'pour')
    }
        this.setBeverage(beverage)
   }

}
module.exports = Glass;