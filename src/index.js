const PubSub = require('./PubSub')
const User = require('./model/User');
const Beverage = require('./model/Beverage');
const Glass = require('./model/Glass');
const Presenter = require('./Presenter');


try {
    
    const ps = new PubSub();
    const presenter = new Presenter(ps);
    const user=new User("Mika",ps);
    const beverage = new Beverage("mint", "tea", 200, ps);
    const glass = new Glass(300, "mug", ps);
    try {
        glass.fill(beverage);
    } catch (error) {
        console.log(error);
    }
    try {
        console.log(user.name + " drinks from " + glass.name);
    } catch (error) {
        console.log(error)
    }

} catch (error) {
    console.log(error);
}
