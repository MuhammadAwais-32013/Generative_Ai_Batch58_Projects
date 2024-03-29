import inquirer from "inquirer";

console.log("----------------Wellcome To CLI Base Calculator Using Inquirer -----------------Code By Muhammad Awais------------------")

do {
    
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


 let continueCalu:{
    continueCal:string 
 }= await inquirer.prompt([{
    name:"continueCal",
    message:"Type y for continue and n for Exist : ",
    type:"list",
    choices:['y','n']
 }]);

let {continueCal}=continueCalu
 if (continueCal=='n') {
    
    console.log("Thank You! Calculation is Existed ")
    break;
 }


} while (true);



