const MyDate = require("./MyDate");
const path = require("path");
const fs = require("fs");
const readline = require('readline');
const ValidationError = require("../Error");

class MyFile {
  
  constructor() {
    this.directoryPath = path.join(__dirname, "../..", "log_files");
    this.filenames = this.readFilesSync(this.directoryPath);
  }

  readFilesSync(dir) {
    const files = [];
    fs.readdirSync(dir).forEach((filename) => {
      const name = path.parse(filename).name;
      const ext = path.parse(filename).ext;
      const filepath = path.resolve(dir, filename);
      const stat = fs.statSync(filepath);
      const isFile = stat.isFile();
      if (isFile) files.push({ filepath, name, ext, stat });
    });
    return files;
  }

  appendToFile(data, filename) {
    fs.appendFile(
      filename,
      data,
      function (err) {
        if (err) throw err;
      }
    );
  }

  createAndOpenFile(name) {
    const filename = "./log_files/" + name + ".txt";
    fs.open(filename, "a+", function (err, file) {
      if (err) throw err;
    });
    return filename;
  }
   readFile(name){
     const items = []
    try {
      const data = fs.readFileSync(name, 'UTF-8');
      const lines = data.split(/\r?\n/);
      lines.forEach((line) => {
          items.push(line);
      });
  } catch (err) {
      console.error(err);
  }
    return items;
}
}
module.exports = MyFile;
