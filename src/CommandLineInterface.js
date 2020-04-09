const inquirer = require("inquirer");

class CommandLineInterface {
    constructor(){
        console.log("Welcome to this app");
    }
  askUser() {
    const userQuestions = [
      {
        name: "Name",
        type: "input",
        message: "Enter your name:",
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return "Please enter your name.";
          }
        }
      }
    ];
    return inquirer.prompt(userQuestions);
  }

  askBeverage() {
    const beverageQuestions = [
      {
        name: "Beverage",
        type: "input",
        message: "Enter your beverage:",
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return "Please enter your beverage.";
          }
        }
      }
    ];
    return inquirer.prompt(beverageQuestions);
  }
  askGlass() {
    const beverageQuestions = [
      {
        name: "Glass",
        type: "input",
        message: "Describe your glass:",
        validate: function(value) {
          if (value.length) {
            return true;
          } else {
            return "Please enter your beverage.";
          }
        }
      }
    ];
    return inquirer.prompt(beverageQuestions);
  }
}
module.exports = CommandLineInterface;
