const PubSub = require("./PubSub");
const User = require("./model/User");
const Beverage = require("./model/Beverage");
const Glass = require("./model/Glass");
const Presenter = require("./Presenter");
const Logger = require("./Logger");

try {
  const ps = new PubSub();
  const presenter = new Presenter(ps);
  const logger = new Logger(ps);
  const user = new User(null, ps);
  const beverage = new Beverage("mint", "tea", 200, ps);
  const glass = new Glass(300, "mug", ps);
  glass.fill(beverage, ps);
} catch (error) {
  console.log(error);
}

// da ima komand line iterfeejs, sa nekoliko ulaza, npm paket koji apstrahuje opcije - command line program
//
//  ko je korisnik, imam neko Pice i sistem odgovara
// da se cuva stanje - moze da bude fajl
//prosiruje se kontrolna logika sa vise akcija
//uslozniti akcije za
//sloj za perzistenciju - to je trenutno stanje sistema, sad je to logger
//vise fajlova - kao neka baza -repository ili vise repository-a

//command query separation - fja moze biti komanda ili query
//exception ako je query samo vracam taj tip ili exception
//commanda ako nisu ok ulazni podaci exception nisam uspeo ili ne mogu. komanda ce se izvrsiti
//asinhonost sledeci put- log i perzistencija
