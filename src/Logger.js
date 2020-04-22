fs = require("fs");
MyDate = require("./MyDate");
class Logger {
  constructor(pubsub) {
    pubsub.subscribe("200", this.onEvent.bind(this));
    pubsub.subscribe("404", this.onEvent.bind(this));
    pubsub.subscribe("user",this.logUser.bind(this));
    this.filename = this.createAndOpenFile("log_");
  }

  createAndOpenFile(name){
    const filename = "./log_files/" +name + new Date().getTime() + ".txt";
    fs.open(filename, "w", function (err, file) {
      if (err) throw err;
    });
    return filename;
  }
  logUser(data){
    const filename = this.createAndOpenFile("user");
    const myDate = new MyDate();
    fs.appendFile(
      filename,
      `${myDate.toString()} ${data.toString()}`,
      function (err) {
        if (err) throw err;
      }
    );
  }
  onEvent(data) {
    const myDate = new MyDate();
    fs.appendFile(
      this.filename,
      `${myDate.toString()} ${data.toString()}`,
      function (err) {
        if (err) throw err;
      }
    );
  }
}
module.exports = Logger;
