#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.cyanBright("**************************Deployed By Muhammad Awais**********************"));
let Sentence:{
    sentence:string
}=await inquirer.prompt([
    {
        name:'sentence',
        type:'input',
        message:'Enter a Sentence to count Words '
    }
]);

let words=Sentence.sentence.trim().split(" ")

console.log(words);
console.log(chalk.blueBright(`No of words ${words.length}`));
let char= words.join('')
console.log(chalk.blueBright(`No of character ${char.length}`));
