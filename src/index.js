const PubSub = require("./PubSub");
const User = require("./model/User");
const Beverage = require("./model/Beverage");
const Glass = require("./model/Glass");
const Presenter = require("./Presenter");
const Logger = require("./Logger");
const chalk = require("chalk");
const CommandLineInterface = require("./CommandLineInterface");

const ps = new PubSub();
const presenter = new Presenter(ps);
const logger = new Logger(ps);
const cli = new CommandLineInterface();

cli.askAllQuestions().then((answers) => {
  const user = new User(answers.name, ps);
  const beverage = new Beverage(
    answers.beverageName,
    answers.type,
    answers.volume,
    ps
  );
  const glass = new Glass(answers.maxvolume, answers.glassName, ps);
  glass.fill(beverage, ps);
});

// cli.askBeverage().
// then(answers =>{
//   const beverage = new Beverage(answers.name, answers.type, answers.volume, ps);
// });

// cli.askGlass().
// then(answers =>{
//   const glass = new Glass(answers.maxvolume, answers.name, ps);
// });

//vise fajlova - kao neka baza -repository ili vise repository-a

//command query separation - fja moze biti komanda ili query
//exception ako je query samo vracam taj tip ili exception
//commanda ako nisu ok ulazni podaci exception nisam uspeo ili ne mogu. komanda ce se izvrsiti
