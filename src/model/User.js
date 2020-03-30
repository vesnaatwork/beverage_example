const ValidationError = require("../Error.js");
class User {
  constructor(name, pubsub) {
    if (name == null) {
      pubsub.publish("error", { code: 400, name: "Name can't be null" });
      throw new ValidationError("Name can't be null");
    }
    this.name = name;
    pubsub.publish("user", { name: this.name });
  }
}
module.exports = User;
