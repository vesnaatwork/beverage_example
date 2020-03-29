
const PubSub = require('./PubSub')
const User = require('./model/User');
const Beverage = require('./model/Beverage');
const Glass = require('./model/Glass');
const Presenter = require('./Presenter');
const Logger = require('./Logger');

try {
    
    const ps = new PubSub();
    const presenter = new Presenter(ps);
    const logger = new Logger(ps);
    const user=new User("Mika",ps);
    const beverage = new Beverage("mint", "tea", 200, ps);
    const glass = new Glass(300, "mug", ps);
    try {
        glass.fill(beverage,ps);
    } catch (error) {
        console.log(error);
    }

} catch (error) {
    console.log(error);
}


//command query separation - fja moze biti komanda ili query
//exception ako je query samo vracam taj tip ili exception
//commanda ako nisu ok ulazni podaci exception nisam uspeo ili ne mogu. komanda ce se izvrsiti 

