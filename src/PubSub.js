// samo prezentovanje ispisivanje stvari sta se desilo
// informativne poruke kreiran su objekti, nakon akcije
// greske
// warning
// success


// pub sub pattern
// samo formatira poruke za izlaz i komunicira sa consolom
class PubSub{
  constructor(){
    this.subscribers = {}
  }
  publish(eventName, data) {
    if (!Array.isArray(this.subscribers[eventName])) {
      return
    }
    this.subscribers[eventName].forEach((callback) => {
      callback(data)
    })
  }
  subscribe (eventName, callback) {
    if (!Array.isArray(this.subscribers[eventName])) {
      this.subscribers[eventName] = []
    }
    this.subscribers[eventName].push(callback)
  }
}
module.exports = PubSub;