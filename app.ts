#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue.underline.bold("suleman Calculator"));

let choice = await inquirer.prompt([
  {
    type: "list",
    name: "reptile",
    message: chalk
      .hex("#DEADED")
      .bold("Select your option with the help of arrow keys"),
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

let firstNumber = await inquirer.prompt([
  {
    name: "number",
    type: "number",
    message: chalk.green("enter your first number"),
  },
]);

let LastNumber = await inquirer.prompt([
  {
    name: "number",
    type: "number",
    message: chalk.green("enter your second number"),
  },
]);

function Calculate(number1: number , number2: number) {
  // if(number1 | number2 === NaN){

  // }
  if (number1 >=0 || number2 >= 0) {

    if (choice.reptile == "Addition") {
      console.log("your anser is", number1 + number2);
    } else if (choice.reptile == "Subtraction") {
      console.log("your anser is", number1 - number2);
    } else if (choice.reptile == "Multiplication") {
      console.log("your anser is", number1 * number2);
    } else if (choice.reptile == "Division") {
      console.log("your anser is", number1 / number2);
    }
    
  }else{
    console.log(chalk.red("you did not provide any number, please provide a number."));
  }
}

Calculate(firstNumber.number, LastNumber.number);
