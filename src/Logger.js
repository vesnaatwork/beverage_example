MyFile = require("./util/MyFile");
class Logger {
  constructor(pubsub) {
    this.fs = new MyFile();
    pubsub.subscribe("200", this.onEvent.bind(this));
    pubsub.subscribe("404", this.onEvent.bind(this));
    pubsub.subscribe("user", this.logUser.bind(this));
    this.myfile = this.fs.createAndOpenFile("log");
    this.userfile=this.fs.createAndOpenFile("user")
  }

  logUser(data) {
    const items=  myfile.readFile(this.userfile);
    const found=0;
    if (items.length!=0){
      for (let j=0;j<items.length;j++){
        if (data.name==items.name){
          found=1
          break;
        }
      }
      if (found==0){
        this.fs.appendToFile(data,this.userfile);
      }

  }
}


  onEvent(data) {
    this.fs.appendToFile(data, this.myfile);
  }
}
module.exports = Logger;
