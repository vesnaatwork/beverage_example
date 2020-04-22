
const chalk=require('chalk');
class Presenter {
  constructor(pubsub) {
    pubsub.subscribe("200",this.onEvent.bind(this));
    pubsub.subscribe("404",this.onEvent.bind(this));
  }

  onEvent(data) {
    if (data!="404"){
      console.log(chalk.green(data.toString()));
    }
    else if (data=="404"){
      console.log(chalk.red(data.toString()));
  }
}
}

module.exports = Presenter;
//mogu da imam vise metoda 

//warning ne mogu sve da sipam npr.


