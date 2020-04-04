
const chalk=require('chalk');
class Presenter {
  constructor(pubsub) {
    pubsub.subscribe("user", this.onUser.bind(this));
    pubsub.subscribe("glass", this.onGlass.bind(this));
    pubsub.subscribe("beverage", this.onBeverage.bind(this));
    pubsub.subscribe("fill", this.onFill.bind(this));
    pubsub.subscribe("error", this.onError.bind(this));
  }

  onUser(data) {
    console.log(chalk.green(`User ${data.name}`));
  }

  onGlass(data) {
    console.log(chalk.green(`Glass volume= ${data.maxvolume}name =${data.name}`));
  }

  onBeverage(data) {
    console.log(
      chalk.green(`Beverage ${data.name} type ${data.type} volume ${data.volume}`)
      );
  }

  onFill(data) {
    console.log(
      chalk.green(`fill ${data.name} volume ${data.volume} beverage ${data.beverage}`)
    );
  }
  onError(data) {
    console.log(chalk.red(`error ${data.name}`));
  }
}
module.exports = Presenter;

// paket koji u komadnoj liniji boji izlaze, za razlicite tipover, error, warning, success

//samo prezentovanje ispisivanje stvari sta se desilo
//informativne poruke kreiran su objekti, nakon akcije
//greske
//warning
//success


//pub sub pattern
//samo formatira poruke za izlaz i komunicira sa consolom
