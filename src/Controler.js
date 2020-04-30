const User = require("./model/User");
const Beverage = require("./model/Beverage");

class Controler {
  constructor(pubsub) {
    this.pubsub = pubsub;
  }

  createUser(answers) {
    const user = new User(answers.name, this.pubsub);
    return user;
  }

  createBeverage(answers) {
    const beverage = new Beverage(
      answers.name,
      answers.type,
      answer.volume,
      this.pubsub
    );
    return user;
  }
}

module.exports = Controler;
