const PubSub = require("./PubSub");
const User = require("./model/User");
const Beverage = require("./model/Beverage");
const Glass = require("./model/Glass");
const Presenter = require("./Presenter");
const Controler = require('./Controler')
const Logger = require("./Logger");
const chalk = require("chalk");
const CommandLineInterface = require("./CommandLineInterface");
const MyFile = require("./util/MyFile");

const ps = new PubSub();
const presenter = new Presenter(ps);
const controler = new Controler(ps);
const logger = new Logger(ps);
const cli = new CommandLineInterface();

// const user = cli.askUser(controler);


const myfile = new MyFile();
const users=[];
console.log(myfile.filenames.length)
for (let i=0;i<myfile.filenames.length;i++){
     console.log(myfile.filenames[i].filepath);
    const items=  myfile.readFile(myfile.filenames[i].filepath);
    if (items.length!=0){
    for (let j=0;j<items.length;j++){
        const user=new User(items[j].name,ps)
         users.push(items[j]);

    }
    }
}
 console.log(users);


//vise fajlova - kao neka baza -repository ili vise repository-a

//command query separation - fja moze biti komanda ili query
//exception ako je query samo vracam taj tip ili exception
//commanda ako nisu ok ulazni podaci exception nisam uspeo ili ne mogu. komanda ce se izvrsiti

//2020-04-27
// na prvo pokretanje. sve da se unesc
// drugi put se pokrene, da ispisem stanje, procitaj sta je upisano
// promena stanja kroz vreme