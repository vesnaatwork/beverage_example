const ValidationError = require("../Error");
const MyDate = require('../util/MyDate');
class User {
  constructor(name, pubsub) {
    if (name == null) throw new ValidationError("Name can't be null",pubsub);
    this.name = name;
    const mydate = new MyDate();
    this.date_created = mydate.toString()
    pubsub.publish("user", this);
  }

  toString() {
    return JSON.stringify(this);
  }
}
module.exports = User;
