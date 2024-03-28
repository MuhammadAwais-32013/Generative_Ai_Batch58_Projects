import inquirer from "inquirer";
let calulator:{
   firstNumber:number,
    secondNumber:number,
    Operator:string
}=await inquirer.prompt([
    {
        name:"firstNumber",
        message:"Enter your first Number : ",
        type:"number"
},

{
    name:"secondNumber",
    message:"Enter your Second Number : ",
    type:"number"
},

{
    name:"Operator",
    message:"Select  your Operator : ",
    choices:["+","-","*","/","%"],
    type:"list"
},
]);

let {firstNumber,secondNumber,Operator}=calulator
if (firstNumber && secondNumber && Operator ) {
let result
    if (Operator==="+") {
        result = firstNumber +secondNumber
    }

    else if (Operator==='-') {

        result = firstNumber -secondNumber
    }

    else if (Operator==='*') {

        result = firstNumber *secondNumber
    }

    else if (Operator==='/') {

        result = firstNumber /secondNumber
    }

    else if (Operator==='%') {

        result = firstNumber %secondNumber
    }

    else {
        console.log('Invalid Operator')
    }
    
console.log(`Your Answer is ${result}`)
}


