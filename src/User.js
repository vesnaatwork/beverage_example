class User
{
    constructor(name)
    {
        this.name=name;

    }
     
    getName(){
        return this.name;
    }

    pourBeverageInGlass(beverage,glass,volume){
    glass.fill(beverage, volume);
    }
    
    drinkFromGlass(glass,volume){
     glass.setVolume(volume,'spill');
    }

}
module.exports = User;
