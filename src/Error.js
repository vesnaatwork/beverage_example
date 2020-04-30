const MyDate=require('../src/util/MyDate')
class ValidationError extends Error {
  constructor(message,pubsub) {
    super(message);
    this.name = message;
    const mydate = new MyDate();
    this.date_created = mydate.toString()
    pubsub.publish("404", this);
  }
  toString(){
    return JSON.stringify(this)
  }
}
module.exports = ValidationError;
