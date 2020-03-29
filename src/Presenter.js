
class Presenter{
    constructor(pubsub){
        pubsub.subscribe("user", this.onUser.bind(this));
        pubsub.subscribe("glass", this.onGlass.bind(this));
        pubsub.subscribe("beverage", this.onBeverage.bind(this));
        pubsub.subscribe("fill", this.onFill.bind(this));
    }

    onUser(data){
        console.log(`User ${data.name}`);
    }

    onGlass(data){
        console.log(`Glass volume= ${data.maxvolume}name =${data.name}`)
    }

    onBeverage(data){
        console.log(`Beverage ${data.name} type ${data.type} volume ${data.volume}`);
    }

    onFill(data){
        console.log(`fill ${data.name} volume ${data.volume} beverage ${data.beverage}`);
    }
}
module.exports = Presenter;
//ToDo
//greske
//warning
