
class Glass
{
    constructor( maxvolume, name)
    {   //try catch
        if (maxvolume == null)

        console.log("this is required");
            else{
                this.maxvolume=maxvolume
            }
        this.name=name;
        this.volume=0;

    }
  
    getBeverage(){
        //throw
        if (beverage !=null)
        return this.beverage;
        else if (this.volume=0)
            print("there is no beverage")
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
   
   fill(beverage,volume){
    //    throw exceptio
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