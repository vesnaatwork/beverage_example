const chalk = require("chalk");
class Presenter {
  constructor(pubsub) {
    pubsub.subscribe("200", this.onEvent.bind(this));
    pubsub.subscribe("user", this.onEvent.bind(this));
    pubsub.subscribe("404", this.onError.bind(this));
  }

  onEvent(data) {
      console.log(chalk.green(data.toString()));
    }

  onError(data) {
      console.log(chalk.red(data.toString()));
    }
  
}

module.exports = Presenter;
//mogu da imam vise metoda

//warning ne mogu sve da sipam npr.
