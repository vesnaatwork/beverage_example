fs = require('fs');
class Logger{
    constructor(pubsub){
        pubsub.subscribe("200", this.onEvent.bind(this));  
        this.filename='./log_files/log_'+new Date().getTime()+".txt";
        
        fs.open(this.filename, 'w', function (err, file) {
            if (err) throw err;
            console.log('Saved!');
          }); 
    }

    onEvent(data){
        const date = new Date();
        fs.appendFile(this.filename,`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}-${date.getHours()}-${date.getMinutes()} ${data.toString()}`, function (err) {
            if (err) throw err;
            console.log('Saved!');
          })
    }
   
}
module.exports = Logger;