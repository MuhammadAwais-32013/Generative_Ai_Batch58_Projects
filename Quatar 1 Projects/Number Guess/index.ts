#! /usr/bin/env node
import inquirer from "inquirer";
import { exit } from "process";
import chalk from "chalk";

console.log(chalk.cyanBright("**************************Deployed By Muhammad Awais**********************"));

let conformation = true;
do {

   let numberGame = await inquirer.prompt([
      {
         name: "minNo",
         type: "input",
         message: chalk.greenBright("Enter the Starting of Range ")
      },

      {
         name: "maxNo",
         type: "input",
         message:  chalk.greenBright("Enter the Ending of Range ")
      },

      {
         name: "guessNo",
         type: "input",
         message:  chalk.greenBright("Enter the Number to Guess ")
      }

   ]);

   let { minNo, maxNo, guessNo } = numberGame;


   let randomNo = Math.floor(Math.random() * (maxNo - minNo + 1) + minNo)
   if (guessNo === randomNo) {
      console.log(chalk.redBright("Congratulations! You guessed it right!"));
      
   } else if (guessNo > maxNo) {
      console.log(chalk.cyan("You entered a number above the range"));
      console.log(`Your Guess is ${guessNo} but Random Number is ${randomNo}`);
      
   } else if (guessNo < minNo) {
      console.log("You entered a number below the range");
      console.log(`Your Guess is ${guessNo} but Random Number is ${randomNo}`)
   } else {
      console.log(" Wrong Guess! Try again");
      console.log(`Your Guess is ${guessNo} but Random Number is ${randomNo}`)
   }

   let existOp = await inquirer.prompt([
      {
         name: "conformation",
         type: "confirm",
         message: "Do you want to Continue ",
         default: false

      }
   ]);

   conformation = existOp.conformation;
} while (conformation);


