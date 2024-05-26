#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.magenta.bold.italic("----------------Wellcome To CLI Base ATM Using Inquirer -----------------Code By Muhammad Awais------------------"))
let userName: String = '';
let pin: number = 0;
let balance: number = Math.floor(Math.random() * 1000000);
let existConfirmation: boolean = true;
do{

    let userInfo=await inquirer.prompt([
        {
            name:"userName",
            type:"input",
            message:"Enter Your User Name"
        },

        {
            name:"pin",
            type:"password",
            message:"Enter Your Pin"
        }
    ]);

        if (!userInfo.userName || !userInfo.pin) {
            console.log("Properly Enter Your Details  ");
        }
       pin=userInfo.pin;
       userName=userInfo.userName;
        }while(!userName || !pin);

    console.log(chalk.cyanBright("Login Success Procced Next"));
do {


    let atmServices: {
        serviceAvail: string
    } = await inquirer.prompt([
        {
            name: 'accountType',
            type: 'list',
            choices: ['Current', 'Saving', 'Defualt'],
            message: 'Select Your Account'
        },

        {
            name: 'serviceAvail',
            type: 'list',
            choices: ['cash withdraw', 'blance Inquiry', 'Fund Transfer '],
            message: "What you want to Procced",

        }

    ]);


    let { serviceAvail } = atmServices;

    if (serviceAvail === 'cash withdraw') {
        let cashWithdraw: {
            amount: number
        } = await inquirer.prompt([
            {
                name: 'amount',
                type: 'input',
                message: 'Enter Amount '
            }
        ]);


        if (cashWithdraw.amount <= balance) {
            console.log(chalk.green(`Operation Successfull`));
            balance = balance - cashWithdraw.amount;
        }

        else {
            console.log(chalk.cyanBright(`Incificient Balance`));
        }
    }

    else if (serviceAvail === 'blance Inquiry') {
        console.log(chalk.green(`Current Balance is RS ${balance}`));
    }

    else if (serviceAvail === 'Fund Transfer ') {
        let fundTransfer = await inquirer.prompt([
            {
                name: 'bankName',
                type: 'list',
                choices: ['HBL', 'ABL', 'UBL', 'MCB', 'NBP'],
                message: 'Transfer to '
            },

            {
                name: 'BankACCNo',
                type: 'input',
                message: 'Enter Account Name OR IBM Number '
            },

            {
                name: 'fundAmount',
                type: 'input',
                message: 'Enter Amount '
            }
        ]);
        if(fundTransfer.fundAmount <= balance){
        console.table(chalk.blueBright.bold(`Requested to transfer ${fundTransfer.fundAmount} To ${fundTransfer.bankName} with Account / IBM NO ${fundTransfer.BankACCNo}`));
        let fundTransferConfirmation = await inquirer.prompt([
            {
                name: 'fundConfirmation',
                type: 'confirm',
                message: 'Do you want to Transfer ',
                default: false
            }
        ]);

        if (fundTransferConfirmation.fundConfirmation) {
            console.log(chalk.greenBright("Fund Transfer Successfull "));
            console.log(chalk.greenBright(`Remaing balance is ${balance = balance - fundTransfer.fundAmount}`));

        }
    }

    else{
        console.log(chalk.magentaBright(`Your balance is ${balance} that is Incficient to make Transiction  `));
    }

    }

    let exist = await inquirer.prompt([
        {
            name: 'existConfirmation',
            type: 'confirm',
            message: 'Do you want to continue or Exist ',
            default: false
        }
    ]);
    existConfirmation = exist.existConfirmation;
} while (existConfirmation);


