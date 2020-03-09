class User
{
    constructor(name)
    {
        this.name=name;

    }
     
    getName(){
        return this.name;
    }
//mora da leti, ne treba da je ovde eksplicitno, ali  spolja to izgleda kako 
    pourBeverageInGlass(beverage,glass,volume){
    glass.fill(beverage, volume);
    }
    
    drinkFromGlass(glass,volume){
     glass.setVolume(volume,'spill');
    }

}
module.exports = User;
