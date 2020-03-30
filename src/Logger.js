fs = require('fs');
class Logger{
    constructor(pubsub){
        pubsub.subscribe("user", this.onUser.bind(this));
        pubsub.subscribe("glass", this.onGlass.bind(this));
        pubsub.subscribe("beverage", this.onBeverage.bind(this));
        pubsub.subscribe("fill", this.onFill.bind(this));
        pubsub.subscribe("error", this.onError.bind(this));
        
        this.filename='./log_files/log_'+new Date().getTime()+".txt";
        
        fs.open(this.filename, 'w', function (err, file) {
            if (err) throw err;
            console.log('Saved!');
          });  
    }

    onUser(data){
        fs.appendFile(this.filename, `User ${data.name}\n`, function (err) {
            if (err) throw err;
            console.log('Saved!');
          })
    }

    onGlass(data){
        fs.appendFile(this.filename,`Glass volume= ${data.maxvolume}name =${data.name}\n`, function (err) {
            if (err) throw err;
            console.log('Saved!');
          })
    }

    onBeverage(data){
        fs.appendFile(this.filename,`Beverage ${data.name} type ${data.type} volume ${data.volume}\n`, function (err) {
            if (err) throw err;
            console.log('Saved!');
          })
    }

    onFill(data){
        fs.appendFile(this.filename,`fill ${data.name} volume ${data.volume} beverage ${data.beverage}\n`, function (err) {
            if (err) throw err;
            console.log('Saved!');
          })
    }
    
    onError(data){
        fs.appendFile(this.filename,`error ${data.name}\n`, function (err) {
            if (err) throw err;
            console.log('Saved!');
          })
    }

   
}
module.exports = Logger;

// da se upisuje datetime
// i da se ekstraktuije jedna metoda