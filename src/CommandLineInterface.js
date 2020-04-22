const inquirer = require("inquirer");

class CommandLineInterface {
    constructor(){
        console.log("Welcome to this app");
    }
   
    async askAllQuestions(){
      const allQuestions = [
        {
          name: "name",
          type: "input",
          message: "Enter your name:",
          validate: function(value) {
            if (value.length) {
              return true;
            } else {
              return "Please enter your name.";
            }
          }
        },
        {
          name: "beverageName",
          type: "input",
          message: "Enter your beverage name:",
          validate: function(value) {
            if (value.length) {
              return true;
            } else {
              return "Please enter your beverage name.";
            }
          }
        },
        {
          name: "type",
          type: "input",
          message: "Enter your beverage type:",
          validate: function(value) {
            if (value.length) {
              return true;
            } else {
              return "Please enter your beverage type.";
            }
          }
        },
        {
          name: "volume",
          type: "number",
          message: "Enter your beverage volume:",
          validate: function(value) {
            var valid = !isNaN(parseFloat(value));
            return valid || 'Please enter a number';
          },
          filter: Number
        },
        {
          name: "glassName",
          type: "input",
          message: "Describe your glass:",
          validate: function(value) {
            if (value.length) {
              return true;
            } else {
              return "Describe your glass:";
            }
          }
        },
        {
          name: "maxvolume",
          type: "number",
          message: "How much fits in your glass in ml:",
          validate: function(value) {
            var valid = !isNaN(parseFloat(value));
            return valid || 'Please enter a number';
          },
          filter: Number
        }

      ];
  return inquirer.prompt(allQuestions)
    }
   
    async askUser() {
      const UserQuestions = [
              {
                name: "name",
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
        return inquirer.prompt(UserQuestions)
      
  }
  
    async askBeverage() {
      const beverageQuestions = [
        {
          name: "name",
          type: "input",
          message: "Enter your beverage name:",
          validate: function(value) {
            if (value.length) {
              return true;
            } else {
              return "Please enter your beverage name.";
            }
          }
        },
        {
          name: "type",
          type: "input",
          message: "Enter your beverage type:",
          validate: function(value) {
            if (value.length) {
              return true;
            } else {
              return "Please enter your beverage type.";
            }
          }
        },
        {
          name: "volume",
          type: "number",
          message: "Enter your beverage volume:",
          validate: function(value) {
            var valid = !isNaN(parseFloat(value));
            return valid || 'Please enter a number';
          },
          filter: Number
        }
      ];
      return inquirer.prompt(beverageQuestions);
    }
    async askGlass() {
      const GlassQuestions = [
        {
          name: "name",
          type: "input",
          message: "Describe your glass:",
          validate: function(value) {
            if (value.length) {
              return true;
            } else {
              return "Describe your glass:";
            }
          }
        },
        {
          name: "maxvolume",
          type: "number",
          message: "How much fits in your glass in ml:",
          validate: function(value) {
            var valid = !isNaN(parseFloat(value));
            return valid || 'Please enter a number';
          },
          filter: Number
        }
      ];
      return inquirer.prompt(beverageQuestions);
    }
  }
  
 module.exports = CommandLineInterface;
