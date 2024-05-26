#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";

const currencyRate: any = {
  'USD': 1, /// Base Currency
  'Afghan Afghani': 71.62,
  'Riyal': 3.75,
  'PK Rupee': 277.63,
  'Indain Rupee': 83.29,
  'Kuwati Dinnar': 0.31,
  'Eyro': 0.92,
  'Qatri Riyal': 3.64

};

let exchangeCurrency: {
  Exchange_into: string
  Exchange_from: string
  amount: any
} = await inquirer.prompt([
  {
    name: 'Exchange_into',
    type: 'list',
    choices: ['USD', 'Riyal', 'PK Rupee', 'Euro', 'Indain Rupee', 'Qatri Riyal', 'Afghan Afghani'],
    message: 'Select Your Currency "to exchange into" \n'
  },

  {
    name: 'Exchange_from',
    type: 'list',
    choices: ['USD', 'Riyal', 'PK Rupee', 'Euro', 'Indain Rupee', 'Qatri Riyal', 'Afghan Afghani'],
    message: 'Select Your Currency "to exchange from" \n'
  },

  {
    name: 'amount',
    type: 'number',
    message: ' ===========Enter Amount============== \n'
  },

]);

if (exchangeCurrency.Exchange_from && exchangeCurrency.Exchange_into) {
  let exchangeFrom = currencyRate[exchangeCurrency.Exchange_from];
  let exchangeTo = currencyRate[exchangeCurrency.Exchange_into];

  let convertedCurency = (exchangeCurrency.amount/exchangeFrom) * exchangeTo;
  console.log(chalk.green(`Exchanged  Amount  is ${convertedCurency}` ));
}




