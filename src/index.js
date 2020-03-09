const User = require('./model/User.js/index.js');
const Beverage = require('./model/Beverage.js/index.js');
const Glass=require( './model/Glass.js/index.js');
const user=new User("Mika");
const beverage=new Beverage("mint","tea",60);
const glass=new Glass( 300, "mug");
try{
user.pourBeverageInGlass(beverage,glass,200);
}
catch (error){
    console.log(typeof(error));

}

console.log(glass.getBeverage());
console.log(glass.getVolume());
user.drinkFromGlass(glass,200);
console.log(glass.getVolume());



//command query separation - fja moze biti komanda ili query
//exception ako je query samo vracam taj tip ili exception
//commanda ako nisu ok ulazni podaci exception nisam uspeo ili ne mogu. komanda ce se izvrsiti 
//mogu da budu tipovi greske, mogu da kastujem error
//SOLID princip